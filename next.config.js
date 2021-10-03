// @ts-check

/** @type {import('next').NextConfig} */
const config = {}

const withPreact = require("next-plugin-preact")

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer(withPreact(config))
