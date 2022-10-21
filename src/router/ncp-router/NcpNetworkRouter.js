import Home from "@/views/Home";

let NcpNetworkRouter = {
    path: '/network',
    name: 'Network',
    children: [
        {
            path: '/vpc-management',
            name: 'VPC Management',
            component: Home
        },
        {
            path: '/subnet-management',
            name: 'Subnet Management',
            component: Home
        },
        {
            path: '/network-acl',
            name: 'Network ACL',
            component: Home
        },
        {
            path: '/nat-gateway',
            name: 'NAT Gateway',
            component: Home
        },
        {
            path: '/vpc-peering',
            name: 'VPC Peering',
            component: Home
        },
        {
            path: '/route-table',
            name: 'Route Table',
            component: Home
        },
        {
            path: '/virtual-private-gateway',
            name: 'Virtual Private Gateway',
            component: Home
        },
        {
            path: '/load-balancer',
            name: 'Load Balancer',
            component: Home
        },
        {
            path: '/global-dns',
            name: 'Global DNS',
            component: Home
        },
        {
            path: '/ssl-vpn',
            name: 'SSL VPN',
            component: Home
        },
    ]
}

export default NcpNetworkRouter;