import React, { useState, useEffect } from 'react'
// import { NotionAPI } from 'notion-client'
import { NotionRenderer } from 'react-notion-x';
// import 'react-notion-x/dist/styles.css'; // Import the styles

const NOTION_PAGE_ID = 'bb93436c98ac47748c093475d0ede615';
const Page = () => {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    async function fetchNotionPage() {
      const data = await fetch(
        `https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`
      ).then((res) => res.json());
      setPageData(data);
    }

    fetchNotionPage();
  }, []);

  if (!pageData) {
    console.log("????")
    return <div>Loading...</div>;
  }

  console.log("pageData:", pageData);
  return (
    <div>
      {/* <NotionRenderer recordMap={pageData.recordMap} darkMode={true}/> */}
      <NotionRenderer
        blockMap={pageData}
      />

    </div>
  );
};

export default Page;

// 'use client';

// import dynamic from 'next/dynamic';
// import Link from 'next/link';
// import { ExtendedRecordMap } from 'notion-types';
// import { getPageTitle } from 'notion-utils';
// import { NotionRenderer } from 'react-notion-x';


// export const NotionPage = ({
//   recordMap,
//   previewImagesEnabled,
//   rootPageId,
//   rootDomain,
// }) => {
//   if (!recordMap) {
//     return null;
//   }

//   return (
//     <>
//       <NotionRenderer
//         recordMap={recordMap}
//         rootDomain={rootDomain}
//         rootPageId={rootPageId}
//         fullPage={false}
//         previewImages={previewImagesEnabled}
//         components={{
//           nextLink: Link,
//           Code,
//           Collection,
//           Equation,
//           Pdf,
//           Modal,
//         }}
//       />
//     </>
//   )};