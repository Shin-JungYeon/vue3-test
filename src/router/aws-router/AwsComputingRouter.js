import Home from "@/views/Home";

let AwsComputingRouter = {
    path: '/computing',
    name: 'Computing',
    children: [
        {
            path: '/server',
            name: 'Server',
            component: Home
        },
        {
            path: '/bare-metal-server',
            name: 'Bare Metal Server',
            component: Home
        },
        {
            path: '/server-image',
            name: 'Server Image',
            component: Home
        },
        {
            path: '/snapshot',
            name: 'Snapshot',
            component: Home
        },
        {
            path: '/auto-scaling',
            name: 'Auto Scaling',
            component: Home
        },
    ]
}

export default AwsComputingRouter;