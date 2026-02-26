# Custom Property Editor Code Samples

This repository contains code samples for creating custom property types in Experience Builder, including both legacy and current approaches.

## Repository structure

### `experiencePropertyTypeExamples/`

Examples of using **ExperiencePropertyTypeBundles** to create custom property types.

> **Deprecation notice:** ExperiencePropertyTypeBundles is deprecated and should no longer be used. These examples are kept for reference only. For new development, use the LightningTypeBundle approach described in `lightningTypeExamples/`.

This folder includes:
- **experiencePropertyTypeBundles/** — Custom property type definitions (e.g. `layoutProperty` with `schema.json` and `design.json`)
- **lwc/** — Lightning Web Components used as custom property editors (e.g. alignment CPE, border style dropdown, article with CPE)

### `lightningTypeExamples/`

Examples of using the **LightningTypeBundle** to create custom property types.

> **Generally Available:** LightningTypeBundle is Generally Available starting with the **Spring '26** release. Use this approach for all new custom property types.

This folder includes:
- **lightningTypes/** — Custom property type definitions using the LightningTypeBundle format (e.g. `layoutProperty` with `schema.json` and Experience Builder editor configuration)
- **lwc/** — Lightning Web Components used as custom property editors (e.g. alignment CPE, border style dropdown, standard and custom article components)

## Getting started

- For new projects, use the samples in **`lightningTypeExamples/`** and the LightningTypeBundle API.
- The **`experiencePropertyTypeExamples/`** folder is provided for historical reference only; do not use ExperiencePropertyTypeBundles for new work.
