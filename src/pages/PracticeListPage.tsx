import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { AdminButton, AdminButtonWrapper, PostDate, PostsCategory, PostsContainer, PostsLane, PostsLaneContainer, PostTitle, SiteContainer } from './SitePage';
import SideTap from '../components/SitePage/SideTap';
import { supabase } from '../utils/Supabase';
import { useSearchParams } from 'react-router-dom';
import { cookies } from '../utils/Cookies';
import { FaPenToSquare } from 'react-icons/fa6';
import { FaTrashAlt } from 'react-icons/fa';
import { commonTextColor } from '../styles/colorToken';
import { useSelector } from 'react-redux';
import { RootState } from '../store/config/configureStore';

const PracticeListPage = () => {

    const [searchParam] = useSearchParams();
    const category = searchParam.get('cg');

    const theme = useSelector((state: RootState) => state.darkMode);

    const [practice, setPractice] = useState<any>(null);
    const [tap, setTap] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (category) {
                try {
                    const [data, categoryData] = await Promise.all([
                        supabase.from('practices').select('*').eq('id', category).order('created_at', { ascending: false }),
                        supabase.from('practices_category').select('*').order('created_at', { ascending: false })
                    ]);

                    if (data.error) throw data.error;

                    setPractice(data?.data);
                    setTap(categoryData?.data);
                } catch (error) {
                    console.error("Error fetching paginated data from Supabase: ", error);
                };
            } else {
                try {
                    const [data, categoryData] = await Promise.all([
                        supabase.from('practices').select('*').order('created_at', { ascending: false }),
                        supabase.from('practices_category').select('*').order('created_at', { ascending: false })
                    ]);

                    if (data.error) throw data.error;

                    setPractice(data?.data);
                    setTap(categoryData?.data);
                } catch (error) {
                    console.error("Error fetching paginated data from Supabase: ", error);
                };
            };
        };

        fetchData();
    }, []);

    const hash = ((category !== null)  && (tap !== null))
        ? tap?.find((item: any) => item.id === String(category))?.connection
        : '전체목록';
    console.log('블로그 글', practice, hash, category);

    return (
        <SiteContainer>
            <SideTap data={tap} param="practices" />
            <PostsContainer>
                <PostsCategory>
                    {/* {hash} */}
                </PostsCategory>
                {practice?.map((item: any, index: any) =>
                    <PostsLaneContainer key={index}>
                        <PostsLane href={`/jaelog/${item?.type}/${item?.id}`}>
                            <PostTitle>
                                {item?.title}
                            </PostTitle>
                            <PostDate>
                                {item?.created_at.slice(0, 10)}
                            </PostDate>
                            {(cookies())
                                && <AdminButtonWrapper>
                                    <AdminButton $color={commonTextColor[theme]}>
                                        <FaPenToSquare />
                                    </AdminButton>
                                    <AdminButton $color={commonTextColor[theme]}>
                                        <FaTrashAlt />
                                    </AdminButton>
                                </AdminButtonWrapper>}
                        </PostsLane>
                    </PostsLaneContainer>
                )}
            </PostsContainer>
        </SiteContainer>
    )
};

export default PracticeListPage;