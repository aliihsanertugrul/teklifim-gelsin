"use client";
import React, { useEffect } from "react";
import NextNProgress from 'nextjs-progressbar';

const BootstrapProvider = ({ children }) => {
	useEffect(() => {
		require("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);

	return <>
	  <NextNProgress />
	{children}</>;
};

export default BootstrapProvider;