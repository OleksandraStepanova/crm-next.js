import React from 'react';
import { Company, getCompany } from '@/lib/api';
import getQueryClient from '@/lib/utils/getQueryClient';
import Header from '@/app/components/header';

export interface PageProps {
  params: Promise<{ id: string }>; // `params` is a Promise
}

export default async function Page({ params }: PageProps) {
  const queryClient = getQueryClient();

  // Await the params to access the `id`
  const resolvedParams = await params;

  await queryClient.prefetchQuery({
    queryKey: ['companies', resolvedParams.id],
    queryFn: () => getCompany(resolvedParams.id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData([
    'companies',
    resolvedParams.id,
  ]) as Company;

  return <Header>{company?.title}</Header>;
}
