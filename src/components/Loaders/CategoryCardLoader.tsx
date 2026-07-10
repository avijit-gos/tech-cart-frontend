/** @format */

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const CategoryCardLoader = () => {
  return (
    <div className='grid grid-cols-5 gap-4'>
      {Array.from({ length: 10 }).map((_, idx) => (
        <Card key={idx} className='p-3'>
          <CardContent className='p-0'>
            <Skeleton className='h-36 w-full rounded-md' />
            <Skeleton className='mt-4 h-4 w-full' />
            <Skeleton className='mt-2 h-4 w-24' />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CategoryCardLoader;
