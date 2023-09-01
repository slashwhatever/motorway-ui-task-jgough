import { MutableRefObject, useCallback, useEffect } from "react";
import { fetchFilesAsync } from "../store/paginationSlice";
import { useAppDispatch } from "../store";

export const useInfiniteScroll = (scrollRef: MutableRefObject<null>) => {
  const dispatch = useAppDispatch();

  const scrollObserver = useCallback(
    (node: HTMLElement) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            dispatch(fetchFilesAsync());
          }
        });
      }).observe(node);
    },
    [dispatch]
  );
  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
    return () => {
      scrollRef.current = null;
    };
  }, [scrollObserver, scrollRef]);
};
