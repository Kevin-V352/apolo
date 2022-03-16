import { useEffect } from 'react';

const useUpdateDocumentTitle = (title: string, args: Array<string>) => {
  useEffect(() => {
    if (args.length === 0) document.title = title;

    if (!args.includes('')) document.title = title;
  }, args);
};

export default useUpdateDocumentTitle;
