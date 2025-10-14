import { H1, H2, H3, H4, P, Blockquote, Lead, InlineCode, Large, Small, Muted } from "./typography"

export function TypographyExample() {
  return (
    <div className="space-y-6">
      <H1>Typography Components</H1>

      <Lead>
        A collection of typography components following shadcn/ui design patterns.
      </Lead>

      <H2>Headings</H2>
      <div className="space-y-4">
        <H1>H1 Heading</H1>
        <H2>H2 Heading</H2>
        <H3>H3 Heading</H3>
        <H4>H4 Heading</H4>
      </div>

      <H2>Text Styles</H2>
      <div className="space-y-4">
        <P>This is a regular paragraph with standard styling.</P>
        <Lead>This is lead text, perfect for introductions.</Lead>
        <Large>Large text for emphasis.</Large>
        <Small>Small text for secondary information.</Small>
        <Muted>Muted text for less important content.</Muted>
      </div>

      <H2>Code and Quotes</H2>
      <div className="space-y-4">
        <P>
          You can use inline code like <InlineCode>const example = "hello"</InlineCode> in your text.
        </P>
        <Blockquote>
          "This is a blockquote. Perfect for highlighting important quotes or testimonials."
        </Blockquote>
      </div>

      <H2>Usage</H2>
      <P>
        Import the components you need from <InlineCode>@/components/ui/typography</InlineCode> and use them directly in your JSX.
      </P>
    </div>
  )
}
