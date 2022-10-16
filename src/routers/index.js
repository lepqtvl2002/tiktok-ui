import DefaultLayout, { OnlyHeader } from "~/layouts";
import { Home, Following, Upload, Search, Profile, Live } from "~/pages";
import config from "~/config";

const publicRouters = [
    {
        path: config.routes.home,
        component: (
            <DefaultLayout>
                <Home />
            </DefaultLayout>
        ),
    },
    {
        path: config.routes.following,
        component: (
            <DefaultLayout>
                <Following />
            </DefaultLayout>
        ),
    },
    {
        path: config.routes.upload,
        component: (
            <OnlyHeader>
                <Upload />
            </OnlyHeader>
        ),
    },
    { path: config.routes.search, component: <Search /> },
    {
        path: config.routes.profile,
        component: (
            <DefaultLayout>
                <Profile />
            </DefaultLayout>
        ),
    },
    {
        path: config.routes.live,
        component: (
            <DefaultLayout>
                <Live />
            </DefaultLayout>
        ),
    },
];

const privateRouters = [];

export { publicRouters, privateRouters };
