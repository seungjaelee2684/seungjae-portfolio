import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { AdminButton, AdminButtonWrapper, PostDate, PostLaneCategory, PostsCategory, PostsContainer, PostsLane, PostsLaneContainer, PostTitle, SiteContainer, TitleLane } from './SitePage';
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
    const category = searchParam.get('c');

    const theme = useSelector((state: RootState) => state.darkMode);

    const [practice, setPractice] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (category) {
                try {
                    const { data, error } = await supabase
                        .from('practices')
                        .select('id, title, created_at, type')
                        .eq('category', category)
                        .order('created_at', { ascending: false });

                    if (error) throw error;

                    setPractice(data);
                } catch (error) {
                    console.error("Error fetching paginated data from Supabase: ", error);
                };
            } else {
                try {
                    const { data, error } = await supabase
                        .from('practices')
                        .select('id, title, created_at, type, category')
                        .order('created_at', { ascending: false });

                    if (error) throw error;

                    setPractice(data);
                } catch (error) {
                    console.error("Error fetching paginated data from Supabase: ", error);
                };
            };
        };

        fetchData();
    }, []);
    console.log('블로그 글', practice, category);

    return (
        <SiteContainer>
            <SideTap />
            <PostsContainer>
                <PostsCategory>
                    {(category) ? `${category} 항목` : '전체목록(공부)'}
                </PostsCategory>
                {practice?.map((item: any, index: any) =>
                    <PostsLaneContainer key={index}>
                        <PostsLane href={`/jaelog/${item?.type}/${item?.id}`}>
                            {(!category)
                                && <PostLaneCategory>
                                    # {item?.category}
                                </PostLaneCategory>}
                            <TitleLane>
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
                            </TitleLane>
                        </PostsLane>
                    </PostsLaneContainer>
                )}
            </PostsContainer>
        </SiteContainer>
    )
};

export default PracticeListPage;