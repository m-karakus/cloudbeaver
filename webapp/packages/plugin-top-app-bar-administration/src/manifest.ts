/*
 * CloudBeaver - Cloud Database Manager
 * Copyright (C) 2020-2023 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */
import type { PluginManifest } from '@cloudbeaver/core-di';

import { PluginBootstrap } from './PluginBootstrap';
import { AdministrationTopAppBarBootstrap } from './TopNavBar/AdministrationTopAppBarBootstrap';

export const administrationTopAppBarPlugin: PluginManifest = {
  info: {
    name: 'Administration Top App Bar plugin',
  },
  providers: [PluginBootstrap, AdministrationTopAppBarBootstrap],
};