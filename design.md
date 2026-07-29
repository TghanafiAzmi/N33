---
version: "2.0.0"
name: "N33 Digital Presence System"
description: "A dark, cinematic design system for a modern digital agency combining editorial scale, technical precision, and purposeful motion."
colors:
  background: "#000000"
  surface: "#f9f9fa"
  text-primary: "#FFFFFF"
  text-secondary: "#A1A1AA"
  text-inverse: "#09090B"
  border: "#27272A"
  border-dashed: "rgba(255,255,255,0.15)"
  accent: "#FFFFFF"
typography:
  display:
    family: "'Google Sans Flex', sans-serif"
    weight: "400"
    lineHeight: "0.95"
    letterSpacing: "-0.02em"
  body:
    family: "'Outfit', sans-serif"
    weight: "200"
    lineHeight: "1.6"
  mono:
    family: "'JetBrains Mono', monospace"
    weight: "300"
    letterSpacing: "0.2em"
spacing:
  xs: "4px"
  sm: "12px"
  md: "24px"
  lg: "48px"
  xl: "80px"
  section: "128px"
rounded:
  none: "0px"
  sm: "2px"
  full: "9999px"
components:
  nav:
    background: "rgba(0,0,0,0.72)"
    blur: "12px"
    border: "1px dashed rgba(63,63,70,0.5)"
  button:
    padding: "20px 40px"
    rounded: "0px"
    textTransform: "uppercase"
    transition: "0.4s cubic-bezier(0.16, 1, 0.3, 1)"
  card:
    border: "1px dashed #27272A"
    hoverBg: "rgba(255,255,255,0.02)"
  input:
    borderBottom: "1px solid rgba(9,9,11,0.25)"
    focusBorder: "#09090B"
motion:
  stagger: "0.1s"
  reveal: "cubic-bezier(0.16, 1, 0.3, 1)"
  duration: "1.2s"
---

## Overview

N33 uses an architectural, monochrome visual system built for a digital agency that combines strategy, design, development, and technology. The website must communicate creative ambition and technical reliability without resembling a corporate template.

The homepage follows a fixed editorial direction rather than a randomized layout. Its primary message is exactly:

> We Build Digital Presence.

The experience follows an Attention, Interest, Desire, Action sequence:

- **Attention**: Navigation and cinematic hero.
- **Interest**: Agency positioning and interactive services.
- **Desire**: Selected work, process, N33 information, and technologies.
- **Action**: Project enquiry and complete footer.

## Colors

Pure black (`#000000`) forms the main canvas. White provides display contrast, while zinc tones support descriptions, metadata, dividers, and inactive states.

Surface Light (`#f9f9fa`) is reserved for the project enquiry and footer transition. Text on this surface must use Text Inverse (`#09090B`) to maintain contrast. Do not introduce decorative brand colours, gradients with visible colour casts, or bright accent hues.

Ambient depth may use charcoal radial lighting, restrained grain, translucent black layers, and soft monochrome washes.

## Typography

- **Display**: Google Sans Flex for large headlines. Use fluid `clamp()` sizing, weight 400, tight tracking, and one to two lines on desktop.
- **Body**: Outfit for service descriptions, project summaries, process explanations, and enquiry guidance.
- **Technical**: JetBrains Mono for navigation, functional numeric indices, industries, services, platform names, and project metadata.

The hero heading must occupy a wide container and remain within three lines on small screens. Avoid narrow headline columns, decorative badges, and generic meta-labels such as “SECTION 01” or “ABOUT US.”

## Spacing

Major sections use at least 128px vertical separation on desktop. Tablet spacing may reduce to 96px, while mobile uses 72px to 88px based on content density.

Internal component spacing stays compact at 12px to 24px. Large empty areas should separate narrative chapters, not create gaps inside lists or grids.

## Layout

- **The Grid**: Use a rigorous 12-column desktop grid with dashed borders extending to section edges.
- **Navigation**: Keep navigation fixed above page content at z-index 50.
- **Hero**: Centre the approved message within a wide composition over the existing Silk background.
- **Services**: Use full-width editorial rows rather than a repeated card grid.
- **Selected Work**: Use a sticky horizontal project track on desktop and a vertical or swipeable sequence on mobile.
- **Process**: Present Think, Design, Develop, Launch, Grow as a clear sequential system.
- **Mobile**: Recompose sections for touch, readable pacing, and native vertical scrolling. Do not shrink the desktop layout.
- **Overflow**: Prevent accidental horizontal page overflow while preserving intentional project-track movement.

## Elevation & Depth

Use CSS transforms, layered borders, Silk movement, masked text, and restrained lighting to create depth. Avoid decorative drop shadows on dark sections.

Project media may use subtle perspective and rotation during hover or scroll. Keep text and controls on a stable plane. Light enquiry panels may use a restrained shadow only when needed to separate stacked surfaces.

## Shapes

Primary buttons, service rows, project media, form controls, and content panels use square corners. A 2px radius is permitted for small utility details.

Do not use pill-shaped hero labels, rounded cards, floating badges, or circular decoration without a functional purpose. A circular cursor treatment is allowed only for project-media interaction on pointer devices.

## Components

- **Navigation**: Fixed translucent bar with N33 identity, centred section links on desktop, a project-enquiry action, and an accessible mobile menu.
- **Hero Reveal**: Existing ReactBits Silk background, dark overlay, masked typography reveal, approved main message, supporting positioning, and approved enquiry action.
- **Service List**: Five large rows for Digital Marketing, Website Design, Website Development, Custom Software Development, and UI/UX Design. Rows may expand or reveal contextual media through hover, focus, or tap.
- **Selected Work**: Horizontal desktop presentation supporting image, project name, industry, services, description, and optional verified outcomes. Unavailable details must use clearly labelled placeholders.
- **Process**: Oversized sequence for Think, Design, Develop, Launch, Grow. Motion should clarify progression.
- **Marquee**: Continuous typography row for approved technologies and platforms. Do not use unverified client logos or partner claims.
- **Contact Form**: Light surface with dark text, visible labels, border-bottom inputs, native validation, clear focus states, and an approved submission destination.
- **Footer**: N33 identity, navigation, approved contact details, social links, and legal links. Keep the light-to-dark transition deliberate.

## Motion

- **Entrance**: Reveal headings through masked upward movement using the defined easing and duration.
- **Hover**: Lift interactive rows and project media by no more than `0.25rem`; combine movement with border or text contrast changes.
- **Silk**: Keep the existing ReactBits effect inside the hero. Limit device pixel ratio and pause rendering when hidden.
- **Portfolio**: Use a sticky horizontal track only when it remains smooth across target devices.
- **Marquee**: Use CSS animation with no duplicate announcements for assistive technology.
- **Cursor**: Show a “VISIT” follower only over project media on fine-pointer devices.
- **SVG Animation**: Use `stroke-dashoffset` for process lines or technical marks.

Prefer CSS, browser APIs, and existing ReactBits components. GSAP is optional and must not be installed without approval. Motion must stop or simplify when `prefers-reduced-motion: reduce` is active.

## Do's and Don'ts

- **Do**: Use “We Build Digital Presence.” exactly as approved.
- **Do**: Use the five approved service names and process stages exactly.
- **Do**: Use dashed borders, wide typography, strong contrast, and large chapter spacing.
- **Do**: Label project placeholders and unconfirmed content.
- **Do**: Preserve native scrolling, keyboard access, and touch usability.
- **Don't**: Invent clients, awards, testimonials, statistics, technologies, or project outcomes.
- **Don't**: Add unapproved marketing copy or CTA wording.
- **Don't**: Use colourful accents, rounded primary components, or generic agency-card grids.
- **Don't**: Add animation that delays access to content or blocks scrolling.

## Accessibility

- Maintain a minimum contrast ratio of 4.5:1 for body text and interactive controls.
- Provide visible keyboard focus for navigation, service rows, project links, and form controls.
- Give icon-only controls specific ARIA labels.
- Keep service and project information available without hover.
- Use semantic headings, landmarks, buttons, links, labels, and form error messages.
- Ensure interactive videos use `muted`, `playsinline`, captions when speech exists, and a static fallback.
- Disable Silk, marquee, cursor-following, and scroll-linked transforms under reduced motion.
- Preserve native touch scrolling and avoid wheel-event interception.
