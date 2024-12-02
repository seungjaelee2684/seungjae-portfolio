import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { PostsContainer, SiteContainer } from './SitePage';
import SideTap from '../components/SitePage/SideTap';
import { supabase } from '../utils/Supabase';
import { useSearchParams } from 'react-router-dom';

const PracticeListPage = () => {

    const [searchParam] = useSearchParams();
    const category = searchParam.get('cg');

    const [practice, setPractice] = useState<any>(null);
    const [tap, setTap] = useState<any>(null);

    console.log('블로그 글', practice, tap);

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

    return (
        <SiteContainer>
            <SideTap data={tap} param="practices" />
            <PostsContainer>

            </PostsContainer>
        </SiteContainer>
    )
};

export default PracticeListPage;