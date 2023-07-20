export enum DragDropType {
  Basic = 'Basic Drag & Drop',
  Sorting = 'Sorting Drag & Drop',
  ConnectedSorting = 'Connected Sorting',
  ConnectedSortingGroup = 'Connected Sorting Group'
}

export enum Orientation {
  Horizontal,
  Vertical
}

export interface DragDropConfig {
  type: DragDropType,
  addHandle?: boolean,
  orientation?: Orientation,
  restrictVerticalDrag?: boolean,
  restrictHorizontalDrag?: boolean,
  itemToDisableDrag?: unknown
}
