'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface PageProps {
  params: Promise<{ id: string }>; // Params is a Promise
}

export default function Page({ params }: PageProps) {
  const router = useRouter();
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(
    null,
  );

  useEffect(() => {
    // Await the params and set the resolved params
    const fetchParams = async () => {
      const data = await params;
      setResolvedParams(data);
    };

    fetchParams();
  }, [params]);

  if (!resolvedParams) {
    // Optionally, show a loading state
    return <div>Loading...</div>;
  }

  return (
    <PromotionFormModal
      companyId={resolvedParams.id}
      show={true}
      onClose={() => router.back()}
    />
  );
}
