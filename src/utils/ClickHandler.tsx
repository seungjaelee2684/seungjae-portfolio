import { supabase } from "./Supabase";

export const onClickPostDeleteHandler = (value: any, id: any, type: string, group: string) => {
  const deleteFetch = async () => {
    if (!value || !id) return;
    const { data, error: countError } = await supabase
      .from(`${type}_${group}`)
      .select('count')
      .eq(group, value)
      .single();

    if (countError) {
      alert('오류가 발생하였습니다.');
      throw countError;
    };

    try {
      const [project, connection] = await Promise.all([
        supabase.from(type).delete().eq('id', id),
        supabase.from(`${type}_${group}`).update({ count: data.count - 1 }).eq(group, value).select()
      ]);

      if (project.error) {
        alert('삭제에 실패하였습니다.');
        throw project.error;
      };
      if (connection.error) {
        alert('삭제에 실패하였습니다.');
        throw connection.error;
      };

      window.location.href = `/jaelog/${type}`;
    } catch (error) {
      alert('오류가 발생하였습니다.');
      console.error("Error fetching paginated data from Supabase: ", error);
    };
  };

  const isDelete = window.confirm('정말로 삭제하시겠습니까?');
  if (isDelete) deleteFetch();
};