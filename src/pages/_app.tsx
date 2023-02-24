import React, { useEffect, useState } from 'react';
import NextNprogress from 'nextjs-progressbar';
import { ThemeProvider } from 'styled-components';
import GithubCorner from 'react-github-corner';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import SettingsBar from 'components/SettingsBar';
import AppSettings from 'components/AppSettings';
import { SettingsProvider } from 'hooks/useSettings';
import GlobalStyle from 'styles/globalStyle';
import { lightTheme, darkTheme } from 'styles/themes';
import { loadNextWord, loadWordPage } from 'helpers/index';
import { routes } from 'helpers/routes';

export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const DARK_MODE_THEME = 'DARK_MODE_THEME';

  useEffect(() => {
    if (Router.pathname === routes.home.path) {
      loadWordPage(loadNextWord());
    }

    if (localStorage.getItem(DARK_MODE_THEME) === 'true') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem(DARK_MODE_THEME, 'true');
    } else {
      localStorage.removeItem(DARK_MODE_THEME);
    }
  }, [darkMode]);

  const currentTheme = darkMode ? darkTheme : lightTheme;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="google-site-verification" content="KcdmWydmGx-Uu8UWh4to7to067ipde00KF1tBIcRLXQ" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />

        <title>Learning English</title>
        <link
          rel="shortcut icon"
          href="/icons/chrome/chrome-favicon-16-16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Improve your english skills!" />
      </Head>
      <ThemeProvider theme={currentTheme}>
        <SettingsProvider>
          <GlobalStyle />
          <NextNprogress
            color={currentTheme.primaryColor}
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            options={{ showSpinner: false }}
          />
          <SettingsBar />

          <Component {...pageProps} />
          <AppSettings darkMode={darkMode} setDarkMode={setDarkMode} />
          <GithubCorner
            href="https://github.com/mathiasfc/learning-english"
            bannerColor={currentTheme.githubCorner}
            octoColor={currentTheme.octoColor}
            direction="left"
          />
        </SettingsProvider>
      </ThemeProvider>
    </>
  );
}
