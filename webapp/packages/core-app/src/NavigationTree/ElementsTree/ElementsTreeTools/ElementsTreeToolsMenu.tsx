/*
 * CloudBeaver - Cloud Database Manager
 * Copyright (C) 2020-2022 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { observer } from 'mobx-react-lite';
import styled, { css } from 'reshadow';

import { MenuBar } from '@cloudbeaver/core-ui';
import { useMenu } from '@cloudbeaver/core-view';

import { MENU_ELEMENTS_TREE_TOOLS } from './MENU_ELEMENTS_TREE_TOOLS';

const MENU_STYLES = css`
  menu-bar {
    composes: theme-background-surface theme-text-on-surface theme-typography--body2 from global;
    display: flex;
    box-sizing: border-box;
    height: 24px;
  }

  menu-bar-item {
    composes: theme-ripple from global;
    padding: 4px;
    margin: 2px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    cursor: pointer;
    background: transparent;
    outline: none;
    color: inherit;

    &::before {
      border-radius: 3px;
    }

    &[use|hidden] {
      display: none;
    }

    & IconOrImage {
        display: block;
        width: 16px;
    }

    & Loader {
        width: 16px;
    }
  }
  
  MenuSeparator {
    composes: theme-border-color-background from global;
    height: 100%;
    margin: 0;
    border: 0 !important;
    border-right: 1px solid !important;
  }
`;

const style = css`
  menu-wrapper {
    display: flex;
    height: 100%;
  }
`;

interface Props {
  className?: string;
}

export const ElementsTreeToolsMenu = observer<Props>(function ElementsTreeToolsMenu({ className }) {
  const menu = useMenu({ menu: MENU_ELEMENTS_TREE_TOOLS });

  return styled(style)(
    <menu-wrapper className={className}>
      <MenuBar menu={menu} style={[MENU_STYLES]} />
    </menu-wrapper>
  );
});