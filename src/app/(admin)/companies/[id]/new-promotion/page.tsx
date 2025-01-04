'use client';

import React, { useEffect, useState } from 'react';
import PromotionForm from '@/app/components/promotion-form';

export interface PageProps {
  params: Promise<{ id: string }>; // Ensure params is a Promise
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
    // Optionally, show a loading state or handle the case when params are not yet resolved
    return <div>Loading...</div>;
  }

  const { id } = resolvedParams; // Destructure the id from resolvedParams

  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={id} />
    </div>
  );
}
