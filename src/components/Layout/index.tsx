import { PropsWithChildren } from 'react';
import { Aside } from '../Aside';
import { Content } from '../Content';
import MainHeader from '../MainHeader';
import { Grid } from './styles';

export function Layout({ children }: PropsWithChildren) {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </Grid>
  );
}
