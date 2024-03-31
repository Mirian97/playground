import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  Table as CustomTable,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";

interface Item {
  id: string;
}

const fetchItems = async ({ pageParam = 1, filter }) => {
  const res = await axios.get(
    `https://swapi.dev/api/planets/?page=${pageParam}`,
  );
  return res.data;
};

const Table: FC = () => {
  const [filter, setFilter] = useState("");
  const { ref, inView } = useInView();
  const { data, fetchNextPage, hasNextPage, isLoading, refetch } =
    useInfiniteQuery({
      queryKey: ["Items"],
      queryFn: ({ pageParam }) => fetchItems({ pageParam, filter }),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        if (lastPage.next == null) return undefined;
        const LAST_PAGE = lastPage.next.split("page=")[1];
        return LAST_PAGE;
      },
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  // const observer = useRef<IntersectionObserver>();
  // const lastItemElementRef = useCallback(
  //   (node: HTMLTableRowElement) => {
  //     if (isLoading) return;
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && hasNextPage) {
  //         fetchNextPage();
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [isLoading, hasNextPage],
  // );

  useEffect(() => {
    refetch();
  }, [filter, refetch]);

  if (isLoading) return <p>A página está carregando...</p>;

  return (
    <CustomTable>
      <TableHeader></TableHeader>
      <TableBody>
        {data !== undefined &&
          data.pages.map((pageData, i) => (
            <React.Fragment key={i}>
              {pageData.results.map((item: Item, index: number) =>
                pageData.results.length === index + 1 ? (
                  <TableRow ref={ref} key={item.url}>
                    <TableCell>{item.name}</TableCell>
                  </TableRow>
                ) : (
                  <TableRow key={item.url}>
                    <TableCell>{item.name}</TableCell>
                  </TableRow>
                ),
              )}
            </React.Fragment>
          ))}
      </TableBody>
    </CustomTable>
  );
};

export default Table;
