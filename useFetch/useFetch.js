import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    setState({
      ...state,
      isLoading: true,
    });

    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      data: data, // esto es igual que poner solo data,
      isLoading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  const { data, isLoading, hasError } = state;

  return {
    data, //se destructuro el state arriba. esto es igual que poner data: state.data, isLoading: state.isLoading, hasError: state.hasError
    isLoading,
    hasError,
  };
};
