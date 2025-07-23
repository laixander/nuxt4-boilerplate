import type { CardFeatureProps } from '~/types/CardFeature'

export const cards: CardFeatureProps[] = [
    {
        icon: 'i-lucide-box',
        title: 'Inventory Tracker',
        description: 'Manage all your stock in one place. Monitor supplies, get low-stock alerts, and streamline reorders.',
        action: 'View Inventory'
    },
    {
        icon: 'i-lucide-user',
        title: 'User Profiles',
        description: 'Store user details securely and customize profile settings with ease.',
        action: 'Manage Users'
    },
    {
        icon: 'i-lucide-bar-chart-3',
        title: 'Analytics Dashboard',
        description: 'Visualize key metrics and make informed decisions with real-time data.',
        action: 'Open Dashboard'
    },
    {
        icon: 'i-lucide-shield-check',
        title: 'Security Settings',
        description: 'Control access, permissions, and privacy configurations for your organization.',
        action: 'Configure'
    },
    {
        icon: 'i-lucide-calendar-days',
        title: 'Event Scheduler',
        description: 'Plan events, send invites, and manage timelines with a user-friendly calendar tool.',
        action: 'Schedule Event'
    },
    {
        icon: 'i-lucide-cloud-upload',
        title: 'Cloud Backup',
        description: 'Securely store your data in the cloud and access it anytime from any device.',
        action: 'Backup Now'
    },
    {
        icon: 'i-lucide-rocket',
        title: 'Launch Campaign',
        description: 'Create and deploy marketing campaigns in minutes with powerful targeting tools.',
        action: 'Start Now'
    },
    {
        icon: 'i-lucide-settings',
        title: 'Advanced Settings',
        description: 'Tweak system behavior and fine-tune features to match your workflow.',
        action: 'Go to Settings'
    }
]
