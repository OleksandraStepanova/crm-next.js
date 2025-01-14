'use client';

import React, { useEffect, useState } from 'react';
import Toolbar from '@/app/components/toolbar';
import SearchInput from '@/app/components/search-input';
import AddPromotionButton from '@/app/components/add-promotion-button';

export interface PageProps {
  params: Promise<{ id: string }>; // Params is a Promise
}

export default function Page({ params }: PageProps) {
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(
    null,
  );

  useEffect(() => {
    const fetchParams = async () => {
      const data = await params; // Await the params promise
      setResolvedParams(data); // Set the resolved params
    };

    fetchParams();
  }, [params]);

  if (!resolvedParams) {
    // Optionally, show a loading state until params are resolved
    return <div>Loading...</div>;
  }

  return (
    <Toolbar action={<AddPromotionButton companyId={resolvedParams.id} />}>
      <SearchInput />
    </Toolbar>
  );
}
