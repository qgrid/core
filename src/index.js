import { ActionModel } from "./action/action.model";
import { ValidationModel } from "./validation/validation.model";
import { PersistenceModel } from "./persistence/persistence.model";
import { FetchModel } from "./fetch/fetch.model";
import { ImportModel } from "./import/import.model";
import { ExportModel } from "./export/export.model";
import { ScrollModel } from "./scroll/scroll.model";
import { StyleModel } from "./style/style.model";
import { DragModel } from "./drag/drag.model";
import { FilterModel } from "./filter/filter.model";
import { VisibilityModel } from "./visibility/visibility.model";
import { HighlightModel } from "./highlight/highlight.model";
import { ProgressModel } from "./progress/progress.model";
import { PaginationModel } from "./pagination/pagination.model";
import { LayerModel } from "./layer/layer.model";
import { ToolbarModel } from "./toolbar/toolbar.model";
import { PluginModel } from "./plugin/plugin.model";
import { EditModel } from "./edit/edit.model";
import { PivotModel } from "./pivot/pivot.model";
import { GroupModel } from "./group/group.model";
import { SortModel } from "./sort/sort.model";
import { ColumnListModel } from "./column-list/column.list.model";
import { RowModel } from "./row/row.model";
import { LayoutModel } from "./layout/layout.model";
import { FootModel } from "./foot/foot.model";
import { FocusModel } from "./focus/focus.model";
import { NavigationModel } from "./navigation/navigation.model";
import { BodyModel } from "./body/body.model";
import { HeadModel } from "./head/head.model";
import { SelectionModel } from "./selection/selection.model";
import { DataModel } from "./data/data.model";
import { ViewModel } from "./view/view.model";
import { SceneModel } from "./scene/scene.model";
import { PipeModel } from "./pipe/pipe.model";
import { GridModel } from "./grid/grid.model";

export function setup(model) {
	model.register('grid', GridModel)
		.register('pipe', PipeModel)
		.register('scene', SceneModel)
		.register('view', ViewModel)
		.register('data', DataModel)
		.register('selection', SelectionModel)
		.register('head', HeadModel)
		.register('body', BodyModel)
		.register('navigation', NavigationModel)
		.register('focus', FocusModel)
		.register('foot', FootModel)
		.register('layout', LayoutModel)
		.register('row', RowModel)
		.register('columnList', ColumnListModel)
		.register('sort', SortModel)
		.register('group', GroupModel)
		.register('pivot', PivotModel)
		.register('edit', EditModel)
		.register('plugin', PluginModel)
		.register('toolbar', ToolbarModel)
		.register('layer', LayerModel)
		.register('pagination', PaginationModel)
		.register('progress', ProgressModel)
		.register('highlight', HighlightModel)
		.register('visibility', VisibilityModel)
		.register('filter', FilterModel)
		.register('drag', DragModel)
		.register('style', StyleModel)
		.register('scroll', ScrollModel)
		.register('export', ExportModel)
		.register('import', ImportModel)
		.register('action', ActionModel)
		.register('fetch', FetchModel)
		.register('persistence', PersistenceModel)
		.register('validation', ValidationModel);
}
