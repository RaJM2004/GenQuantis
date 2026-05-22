---
name: Quantum Ethereal
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#c1c6d6'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#8b919f'
  outline-variant: '#414753'
  surface-tint: '#acc7ff'
  primary: '#acc7ff'
  on-primary: '#002f66'
  primary-container: '#468fff'
  on-primary-container: '#00285a'
  inverse-primary: '#005cbd'
  secondary: '#bcc7de'
  on-secondary: '#263143'
  secondary-container: '#3e495d'
  on-secondary-container: '#aeb9d0'
  tertiary: '#acc7ff'
  on-tertiary: '#002f67'
  tertiary-container: '#5f90e5'
  on-tertiary-container: '#00285a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#acc7ff'
  on-primary-fixed: '#001b3f'
  on-primary-fixed-variant: '#004590'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#d7e2ff'
  tertiary-fixed-dim: '#acc7ff'
  on-tertiary-fixed: '#001a40'
  on-tertiary-fixed-variant: '#004590'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.15em
  mono-data:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 96px
  gutter: 24px
  container-max: 1440px
---

## Brand & Style

The design system is engineered to represent "6th Layer Quantum Intelligence"—a state of computational clarity that transcends traditional binary limits. It targets enterprise visionaries, research architects, and data engineers who operate at the intersection of high-stakes AI and quantum physics. 

The aesthetic is characterized by **Quantum Glassmorphism**: a blend of deep cosmic voids and hyper-illuminated data structures. By utilizing high-fidelity transparency, light refraction, and holographic layering, the UI mimics a Digital Twin environment. The atmosphere is quiet, vast, and premium, evoking the feeling of a clean-room laboratory set within deep space.

We employ a **Minimalist-Futurist** approach. Interfaces are stripped of unnecessary chrome, allowing holographic data visualizations to serve as the primary navigational focal points. Interaction is designed to feel frictionless and ethereal, as if manipulating light itself.

## Colors

This design system utilizes a **High-Fidelity Cosmic Palette** rooted in deep space blacks and navy foundations, punctuated by energized quantum emissions.

- **Primary & Secondary:** `#428CFC` and `#1E293B` form the core structural identity. The navy provides depth for container surfaces, while the primary blue acts as the "active" energy state.
- **Quantum Accents:** To achieve the "6th Layer" aesthetic, we introduce a vibrant purple and cyan. These are used sparingly for data streams, state changes, and holographic highlights to represent quantum tunneling or state shifts.
- **Surface Strategy:** Backgrounds are absolute `#000000` to maximize the perceived luminosity of glass elements. Gradients should transition from Navy (`#1E293B`) to transparent to simulate depth without hard edges.

## Typography

The typographic hierarchy balances technical precision with visionary scale. 

- **Space Grotesk** is used for headlines and large display units. Its geometric, slightly industrial apertures evoke the IBM Quantum aesthetic. It should be used for large "Digital Twin" identifiers and platform-level headers.
- **Manrope** serves as the primary workhorse for body copy and descriptions. Its modern, rounded proportions provide the "enterprise-grade" reliability required for complex data interpretation.
- **Inter** is reserved for high-density labels, micro-copy, and UI controls. It ensures maximum legibility in complex dashboard environments.

Use **letter spacing** specifically for "label-caps" to create an expansive, architectural feel in navigation elements.

## Layout & Spacing

This design system uses a **Fluid Precision Grid** modeled on an 8px base unit with a 4px sub-grid for micro-adjustments. 

- **The Void Concept:** Whitespace (or "blackspace") is treated as a structural element. Large `xxl` gaps are used between major content sections to prevent visual clutter and maintain the high-end, premium feel.
- **Column Structure:** A 12-column fluid grid is preferred for dashboards, with elements often spanning 4 or 6 columns.
- **Dynamic Margins:** On desktop environments, page margins should scale from 48px to 96px to create a centered "cockpit" feel for the user.

## Elevation & Depth

Elevation is achieved through **Luminous Layering** rather than traditional drop shadows.

- **The Backdrop Blur:** All cards and modals utilize `backdrop-filter: blur(20px)` with a semi-transparent background of `#1E293B` at 40%–60% opacity. This creates the "Glassmorphism" effect.
- **Holographic Borders:** Instead of shadows, use 1px solid or gradient borders. For higher-elevation elements (like active modals), the border should use a linear gradient from `#428CFC` to `transparent`.
- **Inner Glows:** Interactive elements use a subtle inner box-shadow (0px 0px 8px) using the Primary or Cyan color at 20% opacity to simulate light emitting from within the component.
- **Z-Axis Hierarchy:**
  - Level 0: Pure Black `#000000` (Background)
  - Level 1: Deep Navy `#1E293B` (Low opacity, no blur)
  - Level 2: Glass Surfaces (Blur + Border)
  - Level 3: Active Overlays (Blur + Glow + Gradient Border)

## Shapes

The shape language is **Precision-Engineered Softness**. 

We use a "Soft" (Level 1) roundedness (4px to 8px) to maintain a professional, high-tech aesthetic that feels technical rather than consumer-soft.

- **Primary Corners:** 4px (0.25rem) for small components like inputs and buttons.
- **Container Corners:** 12px (0.75rem) for large cards and dashboard modules.
- **Circular Elements:** Used exclusively for status indicators (representing qubits) or avatar containers. 

The goal is to maintain a sharp, "machined" look while avoiding the harshness of 0px corners, which can feel dated.

## Components

- **Quantum Buttons:** Buttons feature a high-gloss finish. The "Primary" state is a solid gradient from `#428CFC` to `#78A8FF` with a subtle outer cyan glow on hover. "Ghost" buttons use a 1px border with no fill until interaction.
- **Holographic Cards:** These are the primary containers. They must have a subtle `1px` border (color: `#FFFFFF` at 10% opacity) and a backdrop blur. The header of the card should be separated by a 1px horizontal line.
- **Status Qubits:** Use small, glowing circles to represent system status. Instead of a flat green, use a pulsing Cyan (`#06B6D4`) with a 4px blur radius to suggest active computation.
- **Data Streams (Lists):** List items should have no background by default, separated only by low-opacity horizontal rules. On hover, the entire row should gain a subtle Navy (`#1E293B`) tint.
- **Input Fields:** Fields are bottom-bordered only by default, or fully enclosed with a very dark `#1E293B` fill. Focus states trigger a vertical glow on the left edge of the input.
- **Digital Twin Viewports:** Specialized components meant to hold 3D canvas elements. These should have "optical brackets" in the corners—small L-shaped accents that suggest a camera viewfinder or scanning area.