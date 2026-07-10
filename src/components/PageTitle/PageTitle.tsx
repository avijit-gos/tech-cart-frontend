/** @format */

const PageTitle = ({ title }: { title: string }) => {
  return (
    <p className='w-full bg-neutral-400/10 p-4 mt-2 mb-2 text-2xl font-semibold font-stretch-expanded'>
      {title}
    </p>
  );
};

export default PageTitle;
