import { XAttribute, XName, XNamespace } from '@openxmldev/linq-to-xml';

/**
 * Declares XNamespace and XName fields for the `xmlns="http://schemas.openxmlformats.org/package/2006/relationships"` namespace.
 */
export class Relationships {
  /** @internal */
  private constructor() {
    // Ignore
  }

  /**
   * Defines the XML namespace for the package-wide relationships.
   */
  public static readonly relationships: XNamespace = XNamespace.get(
    'http://schemas.openxmlformats.org/package/2006/relationships'
  );

  /**
   * Returns the namespace declaration `XAttribute` for the package-wide relationships.
   */
  public static get namespaceDeclaration(): XAttribute {
    return new XAttribute(
      XNamespace.none.getName('xmlns'),
      Relationships.relationships.namespaceName
    );
  }

  public static readonly Relationships: XName =
    Relationships.relationships.getName('Relationships');

  public static readonly Relationship: XName =
    Relationships.relationships.getName('Relationship');

  public static readonly TargetMode: XName =
    XNamespace.none.getName('TargetMode');

  public static readonly Target: XName = XNamespace.none.getName('Target');
  public static readonly Type: XName = XNamespace.none.getName('Type');
  public static readonly Id: XName = XNamespace.none.getName('Id');
}
