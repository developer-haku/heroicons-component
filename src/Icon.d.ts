export interface IconProps {
  /**
   * Set the class attribute of the icon.
   */
  className: string;
  /**
   * The style of the icon.
   * For more, check {@link https://heroicons.com/}
   *
   * @defaultValue `outline`
   */
  variant: /**
   * Outline/Medium icon style.
   * 2px stroke weight, 24x24 bounding box.
   * For primary navigation and marketing sections, designed to be rendered at 24x24.
   */
  | "outline"
    /**
     * Solid/Small icon style.
     * Solid fill, 20x20 bounding box.
     * For buttons, form elements, and to support text, designed to be rendered at 20x20.
     */
    | "solid";
}
