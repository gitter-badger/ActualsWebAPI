"use strict";
var router_1 = require('@angular/router');
var application_list_component_1 = require('./applications/application-list.component');
var skill_list_component_1 = require('./skills/skill-list.component');
var page_not_found_component_1 = require('./shared/page-not-found.component');
var appRoutes = [
    {
        path: 'applications',
        component: application_list_component_1.ApplicationListComponent
    },
    {
        path: 'skills',
        component: skill_list_component_1.SkillListComponent
    },
    {
        path: '**',
        component: page_not_found_component_1.PageNotFoundComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map