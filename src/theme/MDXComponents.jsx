import MDXComponents from '@theme-original/MDXComponents';
import { PlatformWrapper } from '@app/mdx-components/PlatformWrapper';
import { ProductWrapper } from '@app/mdx-components/ProductWrapper';
import { Vl, Vg } from '@app/mdx-components/Variables';
import { DocLink } from '@app/mdx-components/Link';

export default {
  ...MDXComponents,
  PlatformWrapper,
  ProductWrapper,
  Vl,
  Vg,
  Link: DocLink
};
