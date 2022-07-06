import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns:pkg="http://schemas.microsoft.com/office/2006/xmlPackage"` namespace.
 */
export class PKG {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace associated with the `pkg` prefix.
   */
  public static readonly pkg: XNamespace = XNamespace.get(
    'http://schemas.microsoft.com/office/2006/xmlPackage'
  );

  /**
   * Returns the namespace declaration `XAttribute` for this namespace.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(
      XNamespace.xmlns.getName('pkg'),
      PKG.pkg.namespaceName
    );
  }

  public static readonly binaryData: XName = PKG.pkg.getName('binaryData');
  public static readonly compression: XName = PKG.pkg.getName('compression');
  public static readonly contentType: XName = PKG.pkg.getName('contentType');
  public static readonly name_: XName = PKG.pkg.getName('name');
  public static readonly package: XName = PKG.pkg.getName('package');
  public static readonly padding: XName = PKG.pkg.getName('padding');
  public static readonly part: XName = PKG.pkg.getName('part');
  public static readonly xmlData: XName = PKG.pkg.getName('xmlData');
}
