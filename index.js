const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({
  addBase,
  addComponents,
  addUtilities,
  theme,
}) {
  addBase({
    "@keyframes progressStripes": {
      "0%": { backgroundPosition: "0 0" },
      "100%": { backgroundPosition: "20px 0" },
    },
    "@keyframes glowPulse": {
      "0%, 100%": { boxShadow: "0 0 8px rgba(34, 211, 238, 0.6)" },
      "50%": { boxShadow: "0 0 16px rgba(34, 211, 238, 0.8)" },
    },
    "@keyframes loadingDots": {
      "0%": { left: "-10%" },
      "100%": { left: "100%" },
    },
    "@keyframes pulse": {
      "0%, 100%": { opacity: "1" },
      "50%": { opacity: "0.5" },
    },
    "@keyframes float": {
      "0%, 100%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-10px)" },
    },
    "@keyframes pulse-soft": {
      "0%, 100%": { opacity: "0.7" },
      "50%": { opacity: "1" },
    },
    "@keyframes rotate-slow": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
    "@keyframes bounce-gentle": {
      "0%, 100%": { transform: "translateY(0) scale(1)" },
      "50%": { transform: "translateY(-5px) scale(1.05)" },
    },
    "@keyframes slide-in": {
      "0%": { transform: "translateX(-100%)" },
      "100%": { transform: "translateX(0)" },
    },
  }),
    // Add button components from the imported buttonClasses
    addComponents({
      // Primary shape card
      ".shape-card-primary": {
        position: "relative",
        backgroundColor: theme("colors.blue.50"),
        borderWidth: "1px",
        borderColor: theme("colors.blue.200"),
        borderRadius: theme("borderRadius.2xl"),
        padding: theme("spacing.6"),
        overflow: "hidden",
        transition: "all 300ms ease",
        boxShadow: theme("boxShadow.md"),
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: theme("boxShadow.lg"),
          "& .shape-circle": {
            animationName: "float",
            animationDuration: "6s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          },
          "& .shape-triangle": {
            animationName: "bounce-gentle",
            animationDuration: "3s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          },
          "& .shape-rectangle": {
            animationName: "rotate-slow",
            animationDuration: "8s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          },
          "& .shape-polygon": {
            animationName: "pulse-soft",
            animationDuration: "4s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          },
          "& .shape-dots": {
            animationName: "slide-in",
            animationDuration: "0.5s",
            animationTimingFunction: "ease-out",
            animationFillMode: "forwards",
          },
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: "5%",
          right: "8%",
          width: theme("spacing.16"),
          height: theme("spacing.16"),
          borderRadius: "50%",
          backgroundColor: theme("colors.blue.100"),
          opacity: "0.6",
          zIndex: "0",
          transition: "all 500ms ease",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "10%",
          left: "10%",
          width: theme("spacing.12"),
          height: theme("spacing.12"),
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          backgroundColor: theme("colors.blue.100"),
          opacity: "0.6",
          zIndex: "0",
          transition: "all 500ms ease",
        },
      },

      // Success shape card
      ".shape-card-success": {
        position: "relative",
        backgroundColor: theme("colors.green.50"),
        borderWidth: "1px",
        borderColor: theme("colors.green.200"),
        borderRadius: theme("borderRadius.2xl"),
        padding: theme("spacing.6"),
        overflow: "hidden",
        transition: "all 300ms ease",
        boxShadow: theme("boxShadow.md"),
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: theme("boxShadow.lg"),
          "& .shape-circle": {
            animationName: "float",
            animationDuration: "6s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          },
          "& .shape-triangle": {
            animationName: "bounce-gentle",
            animationDuration: "3s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          },
          "& .shape-rectangle": {
            animationName: "rotate-slow",
            animationDuration: "8s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          },
          "& .shape-polygon": {
            animationName: "pulse-soft",
            animationDuration: "4s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          },
          "& .shape-dots": {
            animationName: "slide-in",
            animationDuration: "0.5s",
            animationTimingFunction: "ease-out",
            animationFillMode: "forwards",
          },
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: "5%",
          right: "8%",
          width: theme("spacing.16"),
          height: theme("spacing.16"),
          borderRadius: "50%",
          backgroundColor: theme("colors.green.100"),
          opacity: "0.6",
          zIndex: "0",
          transition: "all 500ms ease",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "10%",
          left: "10%",
          width: theme("spacing.12"),
          height: theme("spacing.12"),
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          backgroundColor: theme("colors.green.100"),
          opacity: "0.6",
          zIndex: "0",
          transition: "all 500ms ease",
        },
      },

      // Warning shape card
      ".shape-card-warning": {
        position: "relative",
        backgroundColor: theme("colors.amber.50"),
        borderWidth: "1px",
        borderColor: theme("colors.amber.200"),
        borderRadius: theme("borderRadius.2xl"),
        padding: theme("spacing.6"),
        overflow: "hidden",
        transition: "all 300ms ease",
        boxShadow: theme("boxShadow.md"),
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: theme("boxShadow.lg"),
          "& .shape-circle": {
            animationName: "float",
            animationDuration: "6s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          },
          "& .shape-triangle": {
            animationName: "bounce-gentle",
            animationDuration: "3s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          },
          "& .shape-rectangle": {
            animationName: "rotate-slow",
            animationDuration: "8s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          },
          "& .shape-polygon": {
            animationName: "pulse-soft",
            animationDuration: "4s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          },
          "& .shape-dots": {
            animationName: "slide-in",
            animationDuration: "0.5s",
            animationTimingFunction: "ease-out",
            animationFillMode: "forwards",
          },
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: "5%",
          right: "8%",
          width: theme("spacing.16"),
          height: theme("spacing.16"),
          borderRadius: "50%",
          backgroundColor: theme("colors.amber.100"),
          opacity: "0.6",
          zIndex: "0",
          transition: "all 500ms ease",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "10%",
          left: "10%",
          width: theme("spacing.12"),
          height: theme("spacing.12"),
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          backgroundColor: theme("colors.amber.100"),
          opacity: "0.6",
          zIndex: "0",
          transition: "all 500ms ease",
        },
      },

      // Danger shape card
      ".shape-card-danger": {
        position: "relative",
        backgroundColor: theme("colors.red.50"),
        borderWidth: "1px",
        borderColor: theme("colors.red.200"),
        borderRadius: theme("borderRadius.2xl"),
        padding: theme("spacing.6"),
        overflow: "hidden",
        transition: "all 300ms ease",
        boxShadow: theme("boxShadow.md"),
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: theme("boxShadow.lg"),
          "& .shape-circle": {
            animationName: "float",
            animationDuration: "6s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          },
          "& .shape-triangle": {
            animationName: "bounce-gentle",
            animationDuration: "3s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          },
          "& .shape-rectangle": {
            animationName: "rotate-slow",
            animationDuration: "8s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          },
          "& .shape-polygon": {
            animationName: "pulse-soft",
            animationDuration: "4s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          },
          "& .shape-dots": {
            animationName: "slide-in",
            animationDuration: "0.5s",
            animationTimingFunction: "ease-out",
            animationFillMode: "forwards",
          },
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: "5%",
          right: "8%",
          width: theme("spacing.16"),
          height: theme("spacing.16"),
          borderRadius: "50%",
          backgroundColor: theme("colors.red.100"),
          opacity: "0.6",
          zIndex: "0",
          transition: "all 500ms ease",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "10%",
          left: "10%",
          width: theme("spacing.12"),
          height: theme("spacing.12"),
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          backgroundColor: theme("colors.red.100"),
          opacity: "0.6",
          zIndex: "0",
          transition: "all 500ms ease",
        },
      },

      // Purple shape card
      ".shape-card-purple": {
        position: "relative",
        backgroundColor: theme("colors.purple.50"),
        borderWidth: "1px",
        borderColor: theme("colors.purple.200"),
        borderRadius: theme("borderRadius.2xl"),
        padding: theme("spacing.6"),
        overflow: "hidden",
        transition: "all 300ms ease",
        boxShadow: theme("boxShadow.md"),
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: theme("boxShadow.lg"),
          "& .shape-circle": {
            animationName: "float",
            animationDuration: "6s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          },
          "& .shape-triangle": {
            animationName: "bounce-gentle",
            animationDuration: "3s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          },
          "& .shape-rectangle": {
            animationName: "rotate-slow",
            animationDuration: "8s",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          },
          "& .shape-polygon": {
            animationName: "pulse-soft",
            animationDuration: "4s",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          },
          "& .shape-dots": {
            animationName: "slide-in",
            animationDuration: "0.5s",
            animationTimingFunction: "ease-out",
            animationFillMode: "forwards",
          },
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: "5%",
          right: "8%",
          width: theme("spacing.16"),
          height: theme("spacing.16"),
          borderRadius: "50%",
          backgroundColor: theme("colors.purple.100"),
          opacity: "0.6",
          zIndex: "0",
          transition: "all 500ms ease",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "10%",
          left: "10%",
          width: theme("spacing.12"),
          height: theme("spacing.12"),
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          backgroundColor: theme("colors.purple.100"),
          opacity: "0.6",
          zIndex: "0",
          transition: "all 500ms ease",
        },
      },

      // Shape elements that can be used inside the cards
      ".shape-circle": {
        position: "absolute",
        borderRadius: "50%",
        opacity: "0.6",
        transition: "all 500ms ease",
      },

      ".shape-triangle": {
        position: "absolute",
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        opacity: "0.6",
        transition: "all 500ms ease",
      },

      ".shape-rectangle": {
        position: "absolute",
        opacity: "0.6",
        transition: "all 500ms ease",
      },

      ".shape-polygon": {
        position: "absolute",
        clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
        opacity: "0.6",
        transition: "all 500ms ease",
      },

      ".shape-dots": {
        position: "absolute",
        display: "flex",
        gap: theme("spacing.1"),
        opacity: "0",
        transition: "all 500ms ease",
      },

      // Content wrapper to ensure content sits above the animated shapes
      ".shape-card-content": {
        position: "relative",
        zIndex: "10",
      },

      // Base typography styles

      ".neo-typography": {
        "--heading-font": '"Playfair Display", serif',
        "--body-font": '"Raleway", sans-serif',
        "--mono-font": '"JetBrains Mono", monospace',
        "--accent-font": '"Montserrat", sans-serif',
        fontFamily: "var(--body-font)",
        fontWeight: theme("fontWeight.normal"),
        lineHeight: theme("lineHeight.relaxed"),
        color: theme("colors.gray.800"),
        letterSpacing: theme("letterSpacing.wide"),
      },

      // Elegant display heading with decorative underline
      ".display-heading": {
        fontFamily: "var(--heading-font)",
        fontWeight: theme("fontWeight.bold"),
        lineHeight: theme("lineHeight.tight"),
        letterSpacing: theme("letterSpacing.tighter"),
        marginBottom: theme("spacing.3"),
        position: "relative",
        paddingBottom: theme("spacing.[1.5]"),
        "&::after": {
          content: '""',
          position: "absolute",
          width: "3em",
          height: "3px",
          background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
          bottom: "0",
          left: "0",
          borderRadius: theme("borderRadius.sm"),
        },
      },

      // Modern heading with gradient text
      ".gradient-heading": {
        fontFamily: "var(--accent-font)",
        fontWeight: theme("fontWeight.extrabold"),
        backgroundImage: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
        backgroundClip: "text",
        textFillColor: "transparent",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        letterSpacing: theme("letterSpacing.tight"),
      },

      // Split heading with dual color
      ".split-heading": {
        fontFamily: "var(--heading-font)",
        fontWeight: theme("fontWeight.bold"),
        position: "relative",
        display: "inline-block",
        "& span:first-child": {
          color: theme("colors.gray.900"),
        },
        "& span:last-child": {
          color: theme("colors.indigo.600"),
          fontStyle: "italic",
        },
      },

      // Outlined heading
      ".outline-heading": {
        fontFamily: "var(--accent-font)",
        fontWeight: theme("fontWeight.black"),
        textTransform: "uppercase",
        letterSpacing: theme("letterSpacing.wider"),
        color: "transparent",
        "-webkit-text-stroke": `1.5px ${theme("colors.gray.800")}`,
        textShadow: `3px 3px 0 ${theme("colors.indigo.200")}`,
      },

      // Lead paragraph
      ".lead-text": {
        fontFamily: "var(--accent-font)",
        fontSize: theme("fontSize.xl")[0],
        fontWeight: theme("fontWeight.medium"),
        lineHeight: theme("lineHeight.snug"),
        color: theme("colors.gray.700"),
        letterSpacing: theme("letterSpacing.wide"),
        maxWidth: "65ch",
      },

      // Stylish quotes
      ".stylish-quote": {
        fontFamily: "var(--heading-font)",
        fontStyle: "italic",
        fontSize: theme("fontSize.xl")[0],
        lineHeight: theme("lineHeight.relaxed"),
        position: "relative",
        paddingLeft: theme("spacing.6"),
        marginLeft: theme("spacing.2"),
        marginRight: theme("spacing.2"),
        borderLeft: `4px solid ${theme("colors.indigo.400")}`,
        backgroundImage:
          "linear-gradient(90deg, rgba(165, 180, 252, 0.2), transparent)",
        padding: `${theme("spacing.4")} ${theme("spacing.6")}`,
        borderRadius: `0 ${theme("borderRadius.md")} ${theme(
          "borderRadius.md"
        )} 0`,
      },

      // Caption text
      ".caption-text": {
        fontFamily: "var(--accent-font)",
        fontSize: theme("fontSize.sm")[0],
        fontWeight: theme("fontWeight.normal"),
        color: theme("colors.gray.600"),
        letterSpacing: theme("letterSpacing.widest"),
        lineHeight: theme("lineHeight.snug"),
      },

      // Mono code text
      ".code-text": {
        fontFamily: "var(--mono-font)",
        backgroundColor: theme("colors.gray.100"),
        color: theme("colors.indigo.700"),
        padding: `${theme("spacing.[0.5]")} ${theme("spacing.2")}`,
        borderRadius: theme("borderRadius.sm"),
        fontSize: theme("fontSize.sm")[0],
        fontWeight: theme("fontWeight.medium"),
        letterSpacing: theme("letterSpacing.tight"),
        boxShadow: `inset 0 0 0 1px ${theme("colors.gray.200")}`,
      },

      // Highlighted text
      ".highlight-text": {
        backgroundColor: theme("colors.amber.100"),
        color: theme("colors.amber.900"),
        padding: `${theme("spacing.[0.25]")} ${theme("spacing.[0.5]")}`,
        borderRadius: theme("borderRadius.sm"),
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
          height: "0.35em",
          backgroundColor: theme("colors.amber.200"),
          zIndex: "-1",
          borderRadius: theme("borderRadius.sm"),
        },
      },

      // Accent text
      ".accent-text": {
        color: theme("colors.indigo.600"),
        fontWeight: theme("fontWeight.semibold"),
        letterSpacing: theme("letterSpacing.wide"),
      },

      // Elegant list
      ".elegant-list": {
        listStyleType: "none",
        paddingLeft: theme("spacing.5"),
        "& li": {
          position: "relative",
          marginBottom: theme("spacing.2"),
          lineHeight: theme("lineHeight.snug"),
          "&::before": {
            content: '"❋"',
            position: "absolute",
            left: theme("spacing.-5"),
            color: theme("colors.indigo.500"),
            fontWeight: theme("fontWeight.bold"),
          },
        },
      },

      // Card text
      ".card-text": {
        padding: theme("spacing.6"),
        borderRadius: theme("borderRadius.md"),
        backgroundColor: theme("colors.gray.50"),
        boxShadow: theme("boxShadow.md"),
        border: `1px solid ${theme("colors.gray.200")}`,
      },

      // Size modifiers for display heading
      ".text-2xl": {
        fontSize: theme("fontSize.2xl")[0],
      },
      ".text-3xl": {
        fontSize: theme("fontSize.3xl")[0],
      },
      ".text-4xl": {
        fontSize: theme("fontSize.4xl")[0],
      },
      ".text-5xl": {
        fontSize: theme("fontSize.5xl")[0],
      },
      ".text-6xl": {
        fontSize: theme("fontSize.6xl")[0],
      },
      ".text-7xl": {
        fontSize: theme("fontSize.7xl")[0],
      },
      ".text-8xl": {
        fontSize: theme("fontSize.8xl")[0],
      },

      ".smart-text": {
        fontSize: theme("smartText.base.fontSize", "1rem"),
        lineHeight: theme("smartText.base.lineHeight", "1.5"),
        color: theme(
          "smartText.base.color",
          theme("colors.gray.800", "#1f2937")
        ),
        maxWidth: theme("smartText.base.maxWidth", "65ch"),
        "& h1": {
          fontSize: theme("smartText.headings.h1.fontSize", "2.25rem"),
          lineHeight: theme("smartText.headings.h1.lineHeight", "1.1"),
          fontWeight: theme("smartText.headings.h1.fontWeight", "800"),
          marginTop: theme("smartText.headings.h1.marginTop", "1.5em"),
          marginBottom: theme("smartText.headings.h1.marginBottom", "0.5em"),
        },
        "& h2": {
          fontSize: theme("smartText.headings.h2.fontSize", "1.875rem"),
          lineHeight: theme("smartText.headings.h2.lineHeight", "1.2"),
          fontWeight: theme("smartText.headings.h2.fontWeight", "700"),
          marginTop: theme("smartText.headings.h2.marginTop", "1.25em"),
          marginBottom: theme("smartText.headings.h2.marginBottom", "0.5em"),
        },
        "& h3": {
          fontSize: theme("smartText.headings.h3.fontSize", "1.5rem"),
          lineHeight: theme("smartText.headings.h3.lineHeight", "1.3"),
          fontWeight: theme("smartText.headings.h3.fontWeight", "600"),
          marginTop: theme("smartText.headings.h3.marginTop", "1em"),
          marginBottom: theme("smartText.headings.h3.marginBottom", "0.5em"),
        },
        "& h4": {
          fontSize: theme("smartText.headings.h4.fontSize", "1.25rem"),
          lineHeight: theme("smartText.headings.h4.lineHeight", "1.4"),
          fontWeight: theme("smartText.headings.h4.fontWeight", "600"),
          marginBottom: theme("smartText.headings.h4.marginBottom", "0.5em"),
        },
        "& p": {
          marginBottom: theme(
            "smartText.contentTypes.article.paragraphSpacing",
            "1em"
          ),
        },
        "& ul": {
          paddingLeft: "1.5em",
          marginBottom: theme(
            "smartText.contentTypes.article.paragraphSpacing",
            "1em"
          ),
          listStyleType: theme(
            "smartText.contentTypes.article.listStyle",
            "disc"
          ),
          "& li": {
            marginBottom: theme(
              "smartText.contentTypes.article.listSpacing",
              "0.5em"
            ),
          },
        },
        "& ol": {
          paddingLeft: "1.5em",
          marginBottom: theme(
            "smartText.contentTypes.article.paragraphSpacing",
            "1em"
          ),
          "& li": {
            marginBottom: theme(
              "smartText.contentTypes.article.listSpacing",
              "0.5em"
            ),
          },
        },
        "& a": {
          color: theme(
            "smartText.contentTypes.article.linkColor",
            theme("colors.blue.600", "#2563eb")
          ),
          textDecoration: "underline",
          "&:hover": {
            textDecoration: "underline",
          },
        },
        "& strong, & b": {
          fontWeight: "600",
        },
        "& em, & i": {
          fontStyle: "italic",
        },
        "& code": {
          fontFamily: theme(
            "smartText.contentTypes.documentation.codeFontFamily",
            "ui-monospace, monospace"
          ),
          backgroundColor: theme(
            "smartText.contentTypes.documentation.codeBackground",
            theme("colors.gray.100", "#f3f4f6")
          ),
          padding: theme(
            "smartText.contentTypes.documentation.codePadding",
            "0.2em 0.4em"
          ),
          borderRadius: theme(
            "smartText.contentTypes.documentation.codeRadius",
            "0.25rem"
          ),
        },
        "& pre": {
          fontFamily: theme(
            "smartText.contentTypes.documentation.codeFontFamily",
            "ui-monospace, monospace"
          ),
          backgroundColor: theme(
            "smartText.contentTypes.documentation.codeBackground",
            theme("colors.gray.100", "#f3f4f6")
          ),
          padding: "1rem",
          borderRadius: "0.375rem",
          overflowX: "auto",
          marginBottom: theme(
            "smartText.contentTypes.article.paragraphSpacing",
            "1em"
          ),
          "& code": {
            backgroundColor: "transparent",
            padding: "0",
          },
        },
        "& blockquote": {
          paddingLeft: "1rem",
          borderLeftWidth: "4px",
          borderLeftColor: theme("colors.gray.300", "#d1d5db"),
          fontStyle: "italic",
          marginBottom: theme(
            "smartText.contentTypes.article.paragraphSpacing",
            "1em"
          ),
        },
        "& table": {
          width: "100%",
          tableLayout: "auto",
          textAlign: "left",
          marginBottom: theme(
            "smartText.contentTypes.article.paragraphSpacing",
            "1em"
          ),
        },
        "& thead": {
          borderBottomWidth: "2px",
          borderBottomColor: theme("colors.gray.300", "#d1d5db"),
        },
        "& tbody tr": {
          borderBottomWidth: "1px",
          borderBottomColor: theme("colors.gray.200", "#e5e7eb"),
        },
        "& th": {
          padding: "0.5rem",
          fontWeight: "600",
        },
        "& td": {
          padding: "0.5rem",
        },
        "& hr": {
          borderTopWidth: "1px",
          borderColor: theme("colors.gray.300", "#d1d5db"),
          margin: "2em 0",
        },
        "& img": {
          maxWidth: "100%",
          height: "auto",
          marginBottom: theme(
            "smartText.contentTypes.article.paragraphSpacing",
            "1em"
          ),
        },
        "@media (prefers-color-scheme: dark)": {
          color: theme(
            "smartText.dark.color",
            theme("colors.gray.300", "#d1d5db")
          ),
          "& a": {
            color: theme(
              "smartText.dark.linkColor",
              theme("colors.blue.400", "#60a5fa")
            ),
          },
          "& code": {
            backgroundColor: theme(
              "smartText.dark.codeBackground",
              theme("colors.gray.800", "#1f2937")
            ),
          },
          "& pre": {
            backgroundColor: theme(
              "smartText.dark.codeBackground",
              theme("colors.gray.800", "#1f2937")
            ),
          },
          "& blockquote": {
            borderLeftColor: theme("colors.gray.600", "#4b5563"),
          },
          "& thead": {
            borderBottomColor: theme("colors.gray.600", "#4b5563"),
          },
          "& tbody tr": {
            borderBottomColor: theme("colors.gray.700", "#374151"),
          },
          "& hr": {
            borderColor: theme("colors.gray.600", "#4b5563"),
          },
        },
      },

      // Content Type Variants
      ".smart-text-article": {
        "& p": {
          marginBottom: theme(
            "smartText.contentTypes.article.paragraphSpacing",
            "1em"
          ),
        },
        "& a": {
          color: theme(
            "smartText.contentTypes.article.linkColor",
            theme("colors.blue.600", "#2563eb")
          ),
        },
      },

      ".smart-text-documentation": {
        "& p": {
          marginBottom: theme(
            "smartText.contentTypes.documentation.paragraphSpacing",
            "0.75em"
          ),
        },
        "& h2": {
          fontSize: theme("smartText.headings.h2.fontSize", "1.875rem"),
          lineHeight: theme("smartText.headings.h2.lineHeight", "1.2"),
          fontWeight: theme("smartText.headings.h2.fontWeight", "700"),
          marginTop: theme("smartText.headings.h2.marginTop", "1.25em"),
          marginBottom: theme("smartText.headings.h2.marginBottom", "0.5em"),
          borderBottomWidth: "1px",
          borderBottomColor: theme("colors.gray.200", "#e5e7eb"),
          paddingBottom: "0.25em",
        },
        "& code": {
          fontFamily: theme(
            "smartText.contentTypes.documentation.codeFontFamily",
            "ui-monospace, monospace"
          ),
          backgroundColor: theme(
            "smartText.contentTypes.documentation.codeBackground",
            theme("colors.gray.100", "#f3f4f6")
          ),
          padding: theme(
            "smartText.contentTypes.documentation.codePadding",
            "0.2em 0.4em"
          ),
          borderRadius: theme(
            "smartText.contentTypes.documentation.codeRadius",
            "0.25rem"
          ),
        },
        "@media (prefers-color-scheme: dark)": {
          "& h2": {
            borderBottomColor: theme("colors.gray.700", "#374151"),
          },
          "& code": {
            backgroundColor: theme(
              "smartText.dark.codeBackground",
              theme("colors.gray.800", "#1f2937")
            ),
          },
        },
      },

      // Visual Style Variants
      ".smart-text-relaxed": {
        lineHeight: theme("smartText.visualStyles.relaxed.lineHeight", "1.75"),
        letterSpacing: theme(
          "smartText.visualStyles.relaxed.letterSpacing",
          "0.01em"
        ),
        "& p": {
          marginBottom: theme(
            "smartText.visualStyles.relaxed.paragraphSpacing",
            "1.5em"
          ),
        },
      },

      ".smart-text-compact": {
        lineHeight: theme("smartText.visualStyles.compact.lineHeight", "1.3"),
        letterSpacing: theme(
          "smartText.visualStyles.compact.letterSpacing",
          "-0.01em"
        ),
        "& p": {
          marginBottom: theme(
            "smartText.visualStyles.compact.paragraphSpacing",
            "0.5em"
          ),
        },
      },

      // Animation Classes
      ".smart-text-animate-fade-in": {
        "@keyframes smartTextFadeIn": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        animation: `smartTextFadeIn ${theme(
          "smartText.animations.fadeIn.duration",
          "1s"
        )} ${theme("smartText.animations.fadeIn.timing", "ease-in")} ${theme(
          "smartText.animations.fadeIn.delay",
          "0s"
        )}`,
      },

      ".smart-text-animate-slide-in": {
        "@keyframes smartTextSlideIn": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        animation: `smartTextSlideIn ${theme(
          "smartText.animations.slideIn.duration",
          "0.7s"
        )} ${theme(
          "smartText.animations.slideIn.timing",
          "cubic-bezier(0.16, 1, 0.3, 1)"
        )} ${theme("smartText.animations.slideIn.delay", "0s")}`,
      },

      // Checkbox Components
      ".checkbox-primary": {
        width: theme("spacing.5"),
        height: theme("spacing.5"),
        accentColor: theme("colors.blue.600"),
        transition: "all 300ms ease-in-out",
        "&:hover": {
          transform: "scale(1.1)",
        },
        "&:focus": {
          ringWidth: "2px",
          ringColor: theme("colors.blue.400"),
        },
      },
      ".checkbox-success": {
        width: theme("spacing.6"),
        height: theme("spacing.6"),
        accentColor: theme("colors.green.500"),
        transition: "transform 300ms ease-in",
        "&:hover": {
          transform: "rotate(12deg)",
        },
        "&:focus": {
          ringWidth: "2px",
          ringColor: theme("colors.green.400"),
        },
      },
      ".checkbox-warning": {
        width: theme("spacing.5"),
        height: theme("spacing.5"),
        accentColor: theme("colors.yellow.400"),
        transition: "all 500ms",
        "&:hover": {
          filter: "brightness(1.25)",
        },
        "&:focus": {
          ringWidth: "2px",
          ringColor: theme("colors.yellow.400"),
        },
      },
      ".checkbox-error": {
        width: theme("spacing.5"),
        height: theme("spacing.5"),
        accentColor: theme("colors.red.500"),
        transition: "transform 300ms ease-in-out",
        "&:hover": {
          transform: "scale(1.25)",
        },
        "&:focus": {
          ringWidth: "2px",
          ringColor: theme("colors.red.400"),
        },
      },

      // Input Components
      ".input-standard": {
        width: "100%",
        paddingLeft: theme("spacing.4"),
        paddingRight: theme("spacing.4"),
        paddingTop: theme("spacing.2"),
        paddingBottom: theme("spacing.2"),
        borderWidth: "1px",
        borderColor: theme("colors.gray.300"),
        borderRadius: theme("borderRadius.md"),
        transition: "all 300ms",
        "&:focus": {
          outline: "none",
          ringWidth: "2px",
          ringColor: theme("colors.blue.500"),
          borderColor: theme("colors.blue.500"),
        },
        "&::placeholder": {
          color: theme("colors.gray.400"),
        },
        "&:hover": {
          borderColor: theme("colors.blue.400"),
        },
      },

      ".input-underline": {
        width: "100%",
        paddingLeft: theme("spacing.4"),
        paddingRight: theme("spacing.4"),
        paddingTop: theme("spacing.2"),
        paddingBottom: theme("spacing.2"),
        borderBottomWidth: "2px",
        borderColor: theme("colors.gray.300"),
        backgroundColor: "transparent",
        transition: "all 300ms",
        "&:focus": {
          outline: "none",
          borderBottomWidth: "2px",
          borderColor: theme("colors.purple.500"),
        },
        "&::placeholder": {
          color: theme("colors.gray.500"),
        },
        "&:focus::placeholder": {
          color: theme("colors.purple.400"),
        },
        "&:hover": {
          backgroundColor: theme("colors.gray.50"),
        },
      },

      ".input-search": {
        width: "100%",
        paddingLeft: theme("spacing.10"),
        paddingRight: theme("spacing.4"),
        paddingTop: theme("spacing.2"),
        paddingBottom: theme("spacing.2"),
        borderWidth: "1px",
        borderColor: theme("colors.gray.200"),
        borderRadius: theme("borderRadius.full"),
        boxShadow: theme("boxShadow.sm"),
        transition: "all 300ms",
        "&:focus": {
          outline: "none",
          ringWidth: "2px",
          ringColor: theme("colors.yellow.400"),
          borderColor: theme("colors.yellow.400"),
          boxShadow: theme("boxShadow.inner"),
        },
        "&::placeholder": {
          color: theme("colors.gray.400"),
        },
        "&:hover": {
          boxShadow: theme("boxShadow.md"),
        },
      },

      ".input-error": {
        width: "100%",
        paddingLeft: theme("spacing.4"),
        paddingRight: theme("spacing.4"),
        paddingTop: theme("spacing.2"),
        paddingBottom: theme("spacing.2"),
        borderWidth: "2px",
        borderColor: theme("colors.red.300"),
        borderRadius: theme("borderRadius.md"),
        backgroundColor: theme("colors.red.50"),
        transition: "colors 300ms",
        animation: "pulse 2s infinite",
        "&:focus": {
          outline: "none",
          ringWidth: "2px",
          ringColor: theme("colors.red.500"),
          borderColor: theme("colors.red.500"),
        },
        "&::placeholder": {
          color: theme("colors.red.300"),
        },
        "&:hover": {
          animation: "none",
        },
      },

      ".input-glow": {
        width: "100%",
        paddingLeft: theme("spacing.4"),
        paddingRight: theme("spacing.4"),
        paddingTop: theme("spacing.2"),
        paddingBottom: theme("spacing.2"),
        borderWidth: "1px",
        borderColor: theme("colors.gray.200"),
        borderRadius: theme("borderRadius.lg"),
        backgroundColor: theme("colors.gray.50"),
        boxShadow: theme("boxShadow.md"),
        transition: "all 500ms",
        "&:focus": {
          outline: "none",
          borderColor: "transparent",
          ringWidth: "4px",
          ringColor: theme("colors.teal.300"),
          backgroundColor: theme("colors.white"),
        },
        "&::placeholder": {
          color: theme("colors.gray.500"),
        },
        "&:focus::placeholder": {
          color: theme("colors.teal.500"),
        },
        "&:hover": {
          backgroundColor: theme("colors.white"),
          boxShadow: theme("boxShadow.lg"),
        },
      },

      ".input-expand": {
        width: "100%",
        "@screen md": {
          width: "75%",
        },
        "@screen lg": {
          width: "50%",
        },
        paddingLeft: theme("spacing.4"),
        paddingRight: theme("spacing.4"),
        paddingTop: theme("spacing.2"),
        paddingBottom: theme("spacing.2"),
        border: "none",
        borderRadius: theme("borderRadius.md"),
        backgroundColor: theme("colors.gray.100"),
        transition: "all 300ms",
        transformOrigin: "center",
        "&:focus": {
          outline: "none",
          backgroundColor: theme("colors.white"),
          boxShadow: theme("boxShadow.xl"),
          transform: "scale(1.05)",
        },
        "&::placeholder": {
          color: theme("colors.gray.400"),
        },
        "&:focus::placeholder": {
          opacity: "0.75",
        },
        "&:hover": {
          transform: "scale(1.02)",
        },
      },

      // 1. Gradient Progress Bar - Smooth gradient with rounded corners and shadow
      ".progress-gradient": {
        width: "100%",
        height: theme("spacing.4"),
        backgroundColor: theme("colors.gray.200"),
        borderRadius: theme("borderRadius.full"),
        overflow: "hidden",
        position: "relative",
        boxShadow: theme("boxShadow.inner"),
      },
      ".progress-gradient-bar": {
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        backgroundImage:
          "linear-gradient(to right, " +
          theme("colors.blue.500") +
          ", " +
          theme("colors.purple.600") +
          ")",
        borderRadius: theme("borderRadius.full"),
        transition: "all 500ms ease-out",
        transform: "translateZ(0)",
        "&:hover": {
          transform: "scaleY(1.1)",
          filter: "brightness(1.1)",
        },
      },
      ".progress-gradient-label": {
        position: "absolute",
        top: "0",
        right: theme("spacing.2"),
        fontSize: theme("fontSize.xs"),
        fontWeight: theme("fontWeight.bold"),
        color: theme("colors.white"),
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },

      // 2. Stripes Progress Bar - Animated stripes for active appearance
      ".progress-striped": {
        width: "100%",
        height: theme("spacing.6"),
        backgroundColor: theme("colors.gray.100"),
        borderRadius: theme("borderRadius.md"),
        overflow: "hidden",
        borderWidth: "1px",
        borderColor: theme("colors.gray.300"),
        position: "relative",
      },
      ".progress-striped-bar": {
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        backgroundColor: theme("colors.green.500"),
        backgroundSize: "20px 20px",
        backgroundImage:
          "linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent)",
        transition: "all 300ms ease-in-out",
        animation: "progressStripes 1s linear infinite",
        "&:hover": {
          backgroundColor: theme("colors.green.600"),
        },
      },
      ".progress-striped-label": {
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: theme("fontSize.xs"),
        fontWeight: theme("fontWeight.bold"),
        color: theme("colors.gray.700"),
      },

      // 3. Neon Progress Bar - Glow effect with pulsing animation
      ".progress-neon": {
        width: "100%",
        height: theme("spacing.3"),
        backgroundColor: theme("colors.gray.800"),
        borderRadius: theme("borderRadius.full"),
        overflow: "hidden",
        position: "relative",
        boxShadow: theme("boxShadow.md"),
      },
      ".progress-neon-bar": {
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        backgroundColor: theme("colors.cyan.400"),
        borderRadius: theme("borderRadius.full"),
        transition: "all 700ms",
        boxShadow: "0 0 8px rgba(34,211,238,0.6)",
        animation: "glowPulse 1.5s ease-in-out infinite",
        "&:hover": {
          backgroundColor: theme("colors.cyan.300"),
          boxShadow: "0 0 12px rgba(34,211,238,0.8)",
        },
      },
      ".progress-neon-label": {
        position: "relative",
        fontSize: theme("fontSize.xs"),
        fontWeight: theme("fontWeight.medium"),
        color: theme("colors.cyan.300"),
        marginTop: theme("spacing.1"),
        display: "flex",
        justifyContent: "flex-end",
      },

      // 4. Stepped Progress Bar - Segmented progress with distinct steps
      ".progress-stepped": {
        width: "100%",
        height: theme("spacing.2"),
        backgroundColor: theme("colors.gray.200"),
        display: "flex",
        borderRadius: theme("borderRadius.full"),
        overflow: "hidden",
      },
      ".progress-stepped-segment": {
        height: "100%",
        backgroundColor: theme("colors.orange.500"),
        transition: "all 300ms ease-out",
        "&:first-child": {
          borderTopLeftRadius: theme("borderRadius.full"),
          borderBottomLeftRadius: theme("borderRadius.full"),
        },
        "&:hover": {
          backgroundColor: theme("colors.orange.400"),
        },
        "&:focus": {
          outline: "none",
          ringWidth: "1px",
          ringColor: theme("colors.orange.300"),
        },
      },
      ".progress-stepped-segment-completed": {
        height: "100%",
        backgroundColor: theme("colors.orange.500"),
        transition: "all 300ms ease-out",
        "&:first-child": {
          borderTopLeftRadius: theme("borderRadius.full"),
          borderBottomLeftRadius: theme("borderRadius.full"),
        },
        "&:last-child": {
          borderTopRightRadius: theme("borderRadius.full"),
          borderBottomRightRadius: theme("borderRadius.full"),
        },
        "&:hover": {
          backgroundColor: theme("colors.orange.400"),
        },
        "&:focus": {
          outline: "none",
          ringWidth: "1px",
          ringColor: theme("colors.orange.300"),
        },
      },
      ".progress-stepped-segment-current": {
        height: "100%",
        backgroundColor: theme("colors.orange.300"),
        transition: "all 300ms ease-out",
        animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
        "&:hover": {
          backgroundColor: theme("colors.orange.400"),
        },
        "&:focus": {
          outline: "none",
          ringWidth: "1px",
          ringColor: theme("colors.orange.300"),
        },
      },
      ".progress-stepped-segment-incomplete": {
        height: "100%",
        backgroundColor: theme("colors.gray.300"),
        transition: "all 300ms",
        "&:last-child": {
          borderTopRightRadius: theme("borderRadius.full"),
          borderBottomRightRadius: theme("borderRadius.full"),
        },
        "&:hover": {
          backgroundColor: theme("colors.gray.400"),
        },
        "&:focus": {
          outline: "none",
          ringWidth: "1px",
          ringColor: theme("colors.gray.400"),
        },
      },

      // 5. Minimal Progress Bar with loading dots animation
      ".progress-minimal": {
        width: "100%",
        height: theme("spacing[1]"),
        backgroundColor: theme("colors.gray.100"),
        borderRadius: theme("borderRadius.full"),
        overflow: "hidden",
        position: "relative",
      },
      ".progress-minimal-bar": {
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        backgroundColor: theme("colors.indigo.500"),
        borderRadius: theme("borderRadius.full"),
        transition: "all 1000ms ease-in-out",
      },
      ".progress-minimal-loading": {
        height: theme("spacing[1]"),
        width: theme("spacing.16"),
        position: "absolute",
        top: "0",
        left: "0",
        backgroundImage:
          "linear-gradient(to right, transparent, " +
          theme("colors.white") +
          ", transparent)",
        borderRadius: theme("borderRadius.full"),
        animation: "loadingDots 2s ease-in-out infinite",
        opacity: "0.7",
      },
      ".progress-minimal-label": {
        fontSize: theme("fontSize.xs"),
        fontWeight: theme("fontWeight.medium"),
        color: theme("colors.gray.500"),
        marginTop: theme("spacing.1"),
        display: "flex",
        alignItems: "center",
      },
      ".progress-minimal-complete": {
        fontSize: theme("fontSize.xs"),
        fontWeight: theme("fontWeight.medium"),
        color: theme("colors.indigo.500"),
        marginTop: theme("spacing.1"),
        transition: "all 500ms ease-in-out",
      },

      // Base statcard variants
      ".statcard-primary": {
        backgroundColor: theme("colors.blue.100"),
        borderLeftWidth: "4px",
        borderColor: theme("colors.blue.500"),
        borderRadius: theme("borderRadius.lg"),
        boxShadow: theme("boxShadow.md"),
        padding: theme("spacing.4"),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
      ".statcard-secondary": {
        backgroundImage: `linear-gradient(to bottom right, ${theme(
          "colors.purple.500"
        )}, ${theme("colors.indigo.600")})`,
        borderRadius: theme("borderRadius.xl"),
        boxShadow: theme("boxShadow.lg"),
        padding: theme("spacing.5"),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: theme("colors.white"),
      },
      ".statcard-success": {
        backgroundColor: theme("colors.white"),
        borderWidth: "1px",
        borderColor: theme("colors.gray.200"),
        borderRadius: theme("borderRadius.lg"),
        boxShadow: theme("boxShadow.md"),
        "&:hover": {
          boxShadow: theme("boxShadow.lg"),
        },
        transitionProperty: "box-shadow",
        padding: theme("spacing.6"),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
      ".statcard-warning": {
        backgroundColor: theme("colors.amber.50"),
        borderWidth: "1px",
        borderColor: theme("colors.amber.200"),
        borderRadius: theme("borderRadius.2xl"),
        padding: theme("spacing.4"),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
      ".statcard-danger": {
        backgroundImage: `linear-gradient(to right, ${theme(
          "colors.red.500"
        )}, ${theme("colors.pink.500")})`,
        borderRadius: theme("borderRadius.md"),
        padding: theme("spacing.5"),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: theme("colors.white"),
      },

      // Statcard title variants
      ".statcard-title-primary": {
        color: theme("colors.blue.800"),
        fontWeight: theme("fontWeight.semibold"),
        fontSize: theme("fontSize.sm"),
      },
      ".statcard-title-secondary": {
        color: theme("colors.white"),
        fontWeight: theme("fontWeight.medium"),
        fontSize: theme("fontSize.sm"),
      },
      ".statcard-title-success": {
        color: theme("colors.gray.500"),
        fontWeight: theme("fontWeight.medium"),
        textTransform: "uppercase",
        fontSize: theme("fontSize.xs"),
        letterSpacing: theme("letterSpacing.wider"),
      },
      ".statcard-title-warning": {
        color: theme("colors.amber.800"),
        fontWeight: theme("fontWeight.semibold"),
        fontSize: theme("fontSize.sm"),
      },
      ".statcard-title-danger": {
        color: theme("colors.white"),
        fontWeight: theme("fontWeight.bold"),
        textTransform: "uppercase",
        letterSpacing: theme("letterSpacing.wide"),
        fontSize: theme("fontSize.xs"),
      },

      // Statcard value variants
      ".statcard-value-primary": {
        fontSize: theme("fontSize.3xl"),
        fontWeight: theme("fontWeight.bold"),
        color: theme("colors.blue.700"),
        marginTop: theme("spacing.1"),
        marginBottom: theme("spacing.1"),
      },
      ".statcard-value-secondary": {
        fontSize: theme("fontSize.4xl"),
        fontWeight: theme("fontWeight.bold"),
        color: theme("colors.white"),
        marginTop: theme("spacing.1"),
        marginBottom: theme("spacing.1"),
      },
      ".statcard-value-success": {
        fontSize: theme("fontSize.3xl"),
        fontWeight: theme("fontWeight.extrabold"),
        color: theme("colors.gray.800"),
        marginTop: theme("spacing.2"),
        marginBottom: theme("spacing.2"),
      },
      ".statcard-value-warning": {
        fontSize: theme("fontSize.2xl"),
        fontWeight: theme("fontWeight.bold"),
        color: theme("colors.amber.900"),
        marginTop: theme("spacing.1"),
        marginBottom: theme("spacing.1"),
      },
      ".statcard-value-danger": {
        fontSize: theme("fontSize.3xl"),
        fontWeight: theme("fontWeight.black"),
        color: theme("colors.white"),
        marginTop: theme("spacing.1"),
        marginBottom: theme("spacing.1"),
      },

      // Statcard change indicators - positive
      ".statcard-change-positive-primary": {
        color: theme("colors.green.600"),
        display: "flex",
        alignItems: "center",
        fontSize: theme("fontSize.sm"),
      },
      ".statcard-change-positive-secondary": {
        color: theme("colors.green.300"),
        display: "flex",
        alignItems: "center",
        fontSize: theme("fontSize.sm"),
      },
      ".statcard-change-positive-success": {
        color: theme("colors.emerald.500"),
        display: "flex",
        alignItems: "center",
        fontWeight: theme("fontWeight.medium"),
        fontSize: theme("fontSize.sm"),
      },
      ".statcard-change-positive-warning": {
        color: theme("colors.green.600"),
        display: "flex",
        alignItems: "center",
        fontSize: theme("fontSize.xs"),
      },
      ".statcard-change-positive-danger": {
        color: theme("colors.green.200"),
        display: "flex",
        alignItems: "center",
        fontWeight: theme("fontWeight.medium"),
        fontSize: theme("fontSize.sm"),
      },

      // Statcard change indicators - negative
      ".statcard-change-negative-primary": {
        color: theme("colors.red.600"),
        display: "flex",
        alignItems: "center",
        fontSize: theme("fontSize.sm"),
      },
      ".statcard-change-negative-secondary": {
        color: theme("colors.red.300"),
        display: "flex",
        alignItems: "center",
        fontSize: theme("fontSize.sm"),
      },
      ".statcard-change-negative-success": {
        color: theme("colors.rose.500"),
        display: "flex",
        alignItems: "center",
        fontWeight: theme("fontWeight.medium"),
        fontSize: theme("fontSize.sm"),
      },
      ".statcard-change-negative-warning": {
        color: theme("colors.red.600"),
        display: "flex",
        alignItems: "center",
        fontSize: theme("fontSize.xs"),
      },
      ".statcard-change-negative-danger": {
        color: theme("colors.red.200"),
        display: "flex",
        alignItems: "center",
        fontWeight: theme("fontWeight.medium"),
        fontSize: theme("fontSize.sm"),
      },

      // Statcard icon containers
      ".statcard-icon-primary": {
        padding: theme("spacing.3"),
        backgroundColor: theme("colors.blue.500"),
        color: theme("colors.white"),
        borderRadius: theme("borderRadius.lg"),
      },
      ".statcard-icon-secondary": {
        padding: theme("spacing.3"),
        backgroundColor: theme("colors.white"),
        color: theme("colors.purple.600"),
        borderRadius: theme("borderRadius.full"),
      },
      ".statcard-icon-success": {
        padding: theme("spacing.4"),
        backgroundColor: theme("colors.emerald.100"),
        color: theme("colors.emerald.500"),
        borderRadius: theme("borderRadius.full"),
      },
      ".statcard-icon-warning": {
        padding: theme("spacing.3"),
        backgroundColor: theme("colors.amber.400"),
        color: theme("colors.white"),
        borderRadius: theme("borderRadius.xl"),
      },
      ".statcard-icon-danger": {
        padding: theme("spacing.3"),
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(4px)",
        borderRadius: theme("borderRadius.lg"),
        color: theme("colors.white"),
      },

      // Radio button components
      ".radio-primary": {
        appearance: "none",
        width: theme("spacing.5"),
        height: theme("spacing.5"),
        borderRadius: theme("borderRadius.full"),
        borderWidth: "2px",
        borderColor: theme("colors.blue.500"),
        "&:checked": {
          backgroundColor: theme("colors.blue.500"),
        },
        transitionProperty: "all",
        transitionDuration: "300ms",
        transitionTimingFunction: "ease-in-out",
        "&:hover": {
          transform: "scale(1.1)",
        },
      },
      ".radio-success": {
        appearance: "none",
        width: theme("spacing.5"),
        height: theme("spacing.5"),
        borderRadius: theme("borderRadius.full"),
        borderWidth: "2px",
        borderColor: theme("colors.green.500"),
        "&:checked": {
          backgroundColor: theme("colors.green.500"),
        },
        animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "&:hover": {
          ringWidth: "2px",
          ringColor: theme("colors.green.300"),
        },
        transitionProperty: "all",
      },
      ".radio-warning": {
        appearance: "none",
        width: theme("spacing.6"),
        height: theme("spacing.6"),
        borderRadius: theme("borderRadius.full"),
        borderWidth: "2px",
        borderColor: theme("colors.yellow.400"),
        "&:checked": {
          backgroundColor: theme("colors.yellow.400"),
        },
        "&:hover": {
          transform: "rotate(12deg)",
        },
        transform: "rotate(0deg)",
        transitionProperty: "transform",
        transitionDuration: "300ms",
      },
      ".radio-error": {
        appearance: "none",
        width: theme("spacing.5"),
        height: theme("spacing.5"),
        borderRadius: theme("borderRadius.full"),
        borderWidth: "2px",
        borderColor: theme("colors.red.500"),
        "&:checked": {
          backgroundColor: theme("colors.red.500"),
        },
        transform: "scale(1)",
        "&:hover": {
          transform: "scale(1.25)",
        },
        transitionProperty: "all",
        transitionDuration: "200ms",
      },

      // Original test component
      ".test": {
        backgroundColor: theme("colors.black"),
        padding: theme("spacing.6"),
        boxShadow: theme("boxShadow.xl"),
      },

      // LAYOUT COMPONENTS
      ".btn-layout-1": {
        padding: theme("spacing.5"),
        fontWeight: theme("fontWeight.medium"),
        borderRadius: theme("borderRadius.md"),
        boxShadow: theme("boxShadow.md"),
        transition: "all 300ms",
        transform: "translateZ(0)",
        "&:hover": {
          transform: "scale(1.05) rotate(1deg)",
          boxShadow: theme("boxShadow.lg"),
        },
        "&:active": {
          transform: "scale(0.95)",
        },
        "&:focus": {
          outline: "none",
          ringWidth: "2px",
          ringOpacity: "50%",
        },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          position: "absolute",
          inset: "0",
          opacity: "0",
          transition: "opacity 300ms",
        },
        "&:hover::before": {
          opacity: "20%",
        },
      },

      ".btn-layout-2": {
        padding: theme("spacing.2"),
        borderWidth: "2px",
        fontWeight: theme("fontWeight.medium"),
        borderRadius: theme("borderRadius.full"),
        transition: "all 300ms",
        "&:active": {
          transform: "scale(0.95)",
        },
        "&:focus": {
          outline: "none",
          ringWidth: "2px",
        },
        "&:hover": {
          boxShadow: theme("boxShadow.md"),
          transform: "translateY(-0.25rem)",
        },
        position: "relative",
        "&::after": {
          position: "absolute",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          borderRadius: theme("borderRadius.full"),
          borderWidth: "2px",
          transform: "scale(1.1)",
          opacity: "0",
          transition: "all 500ms",
        },
        "&:hover::after": {
          opacity: "100%",
          transform: "scale(1.05)",
        },
      },

      ".btn-layout-3": {
        padding: theme("spacing.2"),
        fontWeight: theme("fontWeight.semibold"),
        borderRadius: theme("borderRadius.lg"),
        boxShadow: theme("boxShadow.lg"),
        transition: "all 500ms",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": {
          boxShadow: theme("boxShadow.xl"),
        },
        "&:active": {
          transform: "translateY(0.25rem)",
          boxShadow: theme("boxShadow.md"),
        },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          position: "absolute",
          inset: "0",
          transform: "translateX(100%) skewX(12deg)",
        },
        "&:hover::before": {
          animation: "shine 1.5s infinite",
        },
        "&:focus": {
          outline: "none",
          ringWidth: "2px",
        },
      },

      ".btn-layout-4": {
        padding: theme("spacing.2"),
        fontWeight: theme("fontWeight.bold"),
        borderRadius: theme("borderRadius.md"),
        boxShadow: theme("boxShadow.md"),
        transform: "translateZ(0)",
        transition: "all 300ms ease-in-out",
        "&:hover": {
          transform: "translateY(-0.25rem)",
          boxShadow: theme("boxShadow.lg"),
          animation: "none",
        },
        "&:active": {
          transform: "translateY(0)",
        },
        "&:focus": {
          outline: "none",
          ringWidth: "2px",
          ringOpacity: "50%",
        },
        textTransform: "uppercase",
        fontSize: theme("fontSize.sm"),
        letterSpacing: theme("letterSpacing.wider"),
        animation: "pulse 2s infinite",
        position: "relative",
        "&::after": {
          position: "absolute",
          height: "0.5rem",
          width: "0.5rem",
          borderRadius: theme("borderRadius.full"),
          top: "0.25rem",
          right: "0.25rem",
          animation: "ping 1s infinite",
        },
      },

      ".btn-layout-5": {
        padding: theme("spacing.2"),
        fontWeight: theme("fontWeight.bold"),
        borderWidth: "2px",
        borderRadius: theme("borderRadius.md"),
        transition: "all 300ms",
        "&:hover": {
          boxShadow: theme("boxShadow.md"),
        },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          position: "absolute",
          inset: "0",
          borderWidth: "4px",
          opacity: "0",
          transform: "scale(1.05)",
          borderRadius: theme("borderRadius.md"),
          transition: "all 300ms",
        },
        "&:hover::before": {
          opacity: "100%",
          transform: "scale(1)",
        },
        "&:focus": {
          outline: "none",
        },
        letterSpacing: theme("letterSpacing.wider"),
      },

      ".btn-layout-6": {
        padding: theme("spacing.2"),
        fontWeight: theme("fontWeight.medium"),
        borderRadius: theme("borderRadius.md"),
        transition: "colors 300ms",
        "&:focus": {
          outline: "none",
        },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          position: "absolute",
          height: "2.5rem",
          width: "2.5rem",
          borderRadius: theme("borderRadius.full"),
          transform: "scale(0)",
          transition: "transform 500ms",
        },
        "&:active::before": {
          transform: "scale(10)",
          opacity: "0",
        },
        boxShadow: theme("boxShadow.md"),
      },

      ".btn-layout-7": {
        padding: theme("spacing.2"),
        fontWeight: theme("fontWeight.semibold"),
        borderRadius: theme("borderRadius.lg"),
        boxShadow: theme("boxShadow.lg"),
        transition: "all 300ms",
        "&:hover": {
          boxShadow: theme("boxShadow.xl"),
          transform: "rotate(3deg)",
        },
        "&:active": {
          transform: "rotate(1deg)",
        },
        "&:focus": {
          outline: "none",
          ringWidth: "2px",
        },
        position: "relative",
        transformStyle: "preserve-3d",
      },

      ".btn-layout-8": {
        padding: theme("spacing.2"),
        fontWeight: theme("fontWeight.medium"),
        borderRadius: theme("borderRadius.full"),
        transition: "all 300ms",
        "&:focus": {
          outline: "none",
          ringWidth: "2px",
          ringOffset: "2px",
        },
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::before": {
          position: "absolute",
          inset: "0",
          opacity: "0",
          transition: "opacity 300ms",
        },
        "&:hover::before": {
          opacity: "10%",
        },
        "&::after": {
          height: "1rem",
          width: "1rem",
          borderRadius: theme("borderRadius.full"),
          borderWidth: "2px",
          borderTopColor: "transparent",
          marginLeft: "0.5rem",
          transition: "all 300ms",
        },
        "&:hover::after": {
          animation: "spin 1s linear infinite",
        },
      },

      // COLOR COMPONENTS
      ".btn-color-blue": {
        backgroundColor: theme("colors.blue.600"),
        color: theme("colors.white"),
        "&:hover": {
          backgroundColor: theme("colors.blue.700"),
        },
        "&:focus": {
          ringColor: theme("colors.blue.500"),
        },
        "&::before": {
          backgroundColor: theme("colors.white"),
        },
      },

      ".btn-color-purple": {
        borderColor: theme("colors.purple.500"),
        color: theme("colors.purple.500"),
        "&:hover": {
          backgroundColor: theme("colors.purple.500"),
          color: theme("colors.white"),
        },
        "&:focus": {
          ringColor: theme("colors.purple.300"),
        },
        "&::after": {
          borderColor: theme("colors.purple.300"),
        },
      },

      ".btn-color-green": {
        backgroundImage: "linear-gradient(to right, var(--tw-gradient-stops))",
        "--tw-gradient-from": theme("colors.green.400"),
        "--tw-gradient-to": theme("colors.emerald.500"),
        "--tw-gradient-stops": "var(--tw-gradient-from), var(--tw-gradient-to)",
        color: theme("colors.white"),
        "&:hover": {
          "--tw-gradient-from": theme("colors.green.500"),
          "--tw-gradient-to": theme("colors.emerald.600"),
        },
        "&:focus": {
          ringColor: theme("colors.green.400"),
        },
        "&::before": {
          backgroundColor: theme("colors.white"),
          opacity: "0.2",
        },
      },

      ".btn-color-red": {
        backgroundColor: theme("colors.red.500"),
        color: theme("colors.white"),
        "&:hover": {
          backgroundColor: theme("colors.red.600"),
        },
        "&:focus": {
          ringColor: theme("colors.red.500"),
        },
        "&::after": {
          backgroundColor: theme("colors.red.300"),
        },
      },

      ".btn-color-emerald": {
        backgroundColor: theme("colors.black"),
        color: theme("colors.emerald.400"),
        borderColor: theme("colors.emerald.400"),
        "&:hover": {
          color: theme("colors.black"),
          backgroundColor: theme("colors.emerald.400"),
          boxShadow: "0 0 15px " + theme("colors.emerald.400") + "80",
        },
        "&::before": {
          borderColor: theme("colors.emerald.400"),
        },
        "&:active": {
          backgroundColor: theme("colors.emerald.500"),
        },
      },

      ".btn-color-indigo": {
        backgroundColor: theme("colors.indigo.600"),
        color: theme("colors.white"),
        "&:active": {
          backgroundColor: theme("colors.indigo.700"),
        },
        "&:hover": {
          backgroundColor: theme("colors.indigo.500"),
        },
        "&::before": {
          backgroundColor: theme("colors.white"),
          opacity: "0.3",
        },
      },

      ".btn-color-amber": {
        backgroundImage:
          "linear-gradient(to bottom right, var(--tw-gradient-stops))",
        "--tw-gradient-from": theme("colors.amber.300"),
        "--tw-gradient-to": theme("colors.amber.500"),
        "--tw-gradient-stops": "var(--tw-gradient-from), var(--tw-gradient-to)",
        color: theme("colors.white"),
        "&:hover": {
          backgroundImage:
            "linear-gradient(to top right, var(--tw-gradient-stops))",
          "--tw-gradient-from": theme("colors.amber.400"),
          "--tw-gradient-to": theme("colors.amber.600"),
          boxShadow: "0 0 15px " + theme("colors.amber.300") + "30",
        },
        "&:active": {
          boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
          "--tw-gradient-from": theme("colors.amber.500"),
          "--tw-gradient-to": theme("colors.amber.600"),
        },
        "&:focus": {
          ringColor: theme("colors.amber.300"),
        },
      },

      ".btn-color-sky": {
        backgroundColor: theme("colors.sky.500"),
        color: theme("colors.white"),
        "&:focus": {
          ringColor: theme("colors.sky.400"),
        },
        "&:hover": {
          backgroundColor: theme("colors.sky.600"),
        },
        "&:active": {
          backgroundColor: theme("colors.sky.700"),
        },
        "&::before": {
          backgroundColor: theme("colors.white"),
        },
        "&::after": {
          borderColor: theme("colors.white"),
        },
      },
    }),
    addUtilities(
      {
        // Animation Timing Utilities - consolidated into a single addUtilities call
        ".smart-text-animate-delay-1": { animationDelay: "0.1s" },
        ".smart-text-animate-delay-2": { animationDelay: "0.2s" },
        ".smart-text-animate-delay-3": { animationDelay: "0.3s" },
        ".smart-text-animate-delay-5": { animationDelay: "0.5s" },
        ".smart-text-animate-delay-7": { animationDelay: "0.7s" },
        ".smart-text-animate-delay-10": { animationDelay: "1s" },

        ".smart-text-animate-fast": { animationDuration: "0.5s" },
        ".smart-text-animate-normal": { animationDuration: "1s" },
        ".smart-text-animate-slow": { animationDuration: "1.5s" },
        ".smart-text-animate-slower": { animationDuration: "2s" },

        // Text balance utilities
        ".text-balance-true": { textWrap: "balance" },
        ".text-balance-auto": { textWrap: "auto" },
        ".text-balance-none": { textWrap: "none" },

        ".content-auto": {
          contentVisibility: "auto",
        },
        // Add custom animations for the buttons
        "@keyframes shine": {
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        ".animate-shine": {
          animation: "shine 1.5s infinite",
        },
      },
      ["responsive", "hover"]
    );
});
