# OOXML Namespace-Related Classes for LINQ to XML for TypeScript

[![codecov](https://codecov.io/gh/OpenXmlDev/linq-to-ooxml/branch/main/graph/badge.svg?token=h9gnmxhU0z)](https://codecov.io/gh/OpenXmlDev/linq-to-ooxml)
[![npm version](https://badge.fury.io/js/@openxmldev%2Flinq-to-ooxml.svg)](https://www.npmjs.com/package/@openxmldev/linq-to-ooxml)

Office Open XML (also informally known as OOXML) was initially standardized by the Ecma (as ECMA-376),
and by the ISO and IEC (as ISO/IEC 29500) in later versions. OOXML consists of:

- a family of XML schemas, which define the XML vocabularies for word-processing, spreadsheet, and
  presentation documents; as well as
- the packaging of documents that conform to these schemas.

The XML schemas define sets of XML element and attribute names, which are organized in XML namespaces.

In .NET, the [Open XML SDK](https://github.com/OfficeDev/Open-XML-SDK) provides tools for working with
Office Open XML, including XML namespace-related classes for 
[LINQ to XML](https://docs.microsoft.com/en-us/dotnet/standard/linq/linq-xml-overview). This repo provides
TypeScript classes (e.g., `W`, `X`, `P`) for relevant XML namespaces and the XML names contained in such
namespaces. The namespace-related classes can be used with the `@openxmldev/linq-to-xml` library, which
provides an implementation of [LINQ to XML in TypeScript](https://github.com/OpenXmlDev/linq-to-xml).

## Installing

Run `npm install @openxmldev/linq-to-ooxml` to install the library.

## Documentation

- [API documentation](https://openxmldev.github.io/linq-to-ooxml) (this repo)
- [LINQ to XML for TypeScript API documentation](https://openxmldev.github.io/linq-to-xml)

## Building

Run `nx build linq-to-ooxml` to build the library.

## Running Unit Tests

Run `nx test linq-to-ooxml` to execute the unit tests via [Jest](https://jestjs.io).

## Examples

In short words, usage is identical to .NET. Have a look at the
[API documentation](https://openxmldev.github.io/linq-to-ooxml) to see what is on offer.

### Importing

Simply import the namespace-related classes from `@openxmldev/linq-to-ooxml`. For example:

```typescript
import { W, W14, WP, WPC } from '@openxmldev/linq-to-ooxml';
```

All class names are the uppercase versions (e.g., `W`, `W14`, `WP`, `WPC`) of the namespace prefixes
(e.g., `w`, `w14`, `wp`, `wpc`).

### Properties Provided by the Namespace-related Classes

The following code snippet explains the anatomy of the namespace-related classes, using an excerpt
of the `W` class. Firstly, with the exception of the `NoNamespace` class, each class declares exactly
one property of type `XNamespace`, using the namespace prefix as the name of such property. In this
case, the prefix is `w`, so the property is called `w` as well. Second, each class defines a getter
called `namespaceDeclaration`, which returns an `XAttribute` representing an XML namespace declaration
such as `xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"`. Again, the 
`NoNamespace` class is the exception because it does not represent a namespace but rather defines all
names that do _not_ have a namespace.

```typescript
class W {
  public static readonly w: XNamespace = XNamespace.get(
    'http://schemas.openxmlformats.org/wordprocessingml/2006/main'
  );

  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(XNamespace.xmlns.getName('w'), W.w.namespaceName);
  }

  public static readonly document: XName = W.w.getName('document');
  public static readonly body: XName = W.w.getName('body');
  public static readonly p: XName = W.w.getName('p');
  public static readonly r: XName = W.w.getName('r');
  public static readonly t: XName = W.w.getName('t');
}
```

Third, each class defines properties for all names (e.g., `w:document`, `w:body`, `w:p`) defined in
the namespace (or having no namespace in the case of the `NoNamespace` class).

### Using the Namespace-related Classes

Using the names in conjunction with the classes provided by the `@openxmldev/linq-to-xml` package,
you could create a super-simple "Hello World!" document as follows:

```typescript
const document =
  new XElement(W.document,
    W.namespaceDeclaration,
    new XElement(W.body,
      new XElement(W.p,
        new XElement(W.r,
          new XElement(W.t, 'Hello World!')))));
```

## Language-specific Differences

The reserved keywords in C# and TypeScript are different, meaning that there are some minor
differences in the naming of the static properties in C# vs. TypeScript.

In C#, the `@` character is prepended where a property name is a reserved keyword. In case the
property name does not collide with a reserved keyword in TypeScript, the property name is used
as-is.

In TypeScript, collisions with reserved keywords or names are resolved by appending underscores
to property names. For example, `name` and `length` are reserved names in TypeScript, meaning
an underscore will be appended in those two cases.
