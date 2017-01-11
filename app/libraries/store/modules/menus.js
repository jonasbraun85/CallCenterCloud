/**
 * Initial state
 * @type {Object}
 */
const state = {
  sidebar: [
    {
      title: 'Messages',
      icon: 'admin-comments',
      name: 'comments'
    },
    {
      divider: true
    },
    {
      title: 'Users',
      icon: 'admin-users',
      name: 'users',
      children: [
        { title: 'User1', name: 'users' },
        { title: 'User2', name: 'users' }
      ]
    },
    {
      title: 'Agents',
      icon: 'admin-users',
      name: 'agents',
      children: [
        { title: 'Agent1', name: 'agents' },
        { title: 'Agent2', name: 'agents' }
      ]
    },
    {
      title: 'Sip',
      icon: 'dashboard',
      name: 'sip',
      children: [
        { title: 'Sip1', name: 'sip' },
        { title: 'Sip2', name: 'sip' }
      ]
    },
    {
      divider: true
    },
    {
      title: 'Queue',
      icon: 'admin-tools',
      name: 'queues',
      children: [
        { title: 'Available queues', name: 'queues' },
        { title: 'Import', name: 'queues' },
        { title: 'Export', name: 'queues' }
      ]
    },
    {
      title: 'Dial Plan',
      icon: 'admin-tools',
      name: 'dialplan',
      children: [
        { title: 'Dial Plan1', name: 'dialplan' },
        { title: 'Dial Plan2', name: 'dialplan' },
        { title: 'Dial Plan3', name: 'dialplan' }
      ]
    },
    {
      title: 'Trunk',
      icon: 'dashboard',
      name: 'trunk',
      children: [
        { title: 'Trunk1', name: 'trunk' },
        { title: 'Trunk2', name: 'trunk' }
      ]
    },
    {
      divider: true
    },
    {
      title: 'Audio',
      icon: 'admin-media',
      name: 'audio',
      children: [
        { title: 'Media Library', name: 'audio' },
        { title: 'Add to', name: 'audio' }
      ]
    },
    {
      divider: true
    },
    {
      title: 'Cally Square',
      icon: 'admin-appearance',
      name: 'callysquare',
      children: [
        { title: 'Cally Square1', name: 'callysquare' },
        { title: 'Cally Square2', name: 'callysquare' }
      ]
    },
    {
      title: 'Calendar',
      icon: 'admin-appearance',
      name: 'calendar',
      children: [
        { title: 'Calendar1', name: 'calendar' },
        { title: 'Calendar2', name: 'calendar' }
      ]
    },
    {
      title: 'Tickets',
      icon: 'admin-appearance',
      name: 'ticket',
      children: [
        { title: 'Ticket1', name: 'ticket' },
        { title: 'Ticket2', name: 'ticket' }
      ]
    },
    {
      title: 'Settings',
      icon: 'admin-settings',
      name: 'options',
      children: [
        { title: 'Conventional', name: 'options' },
        { title: 'Write', name: 'options' },
        { title: 'Read', name: 'options' },
        { title: 'Discuss', name: 'options' },
        { title: 'Multimedia', name: 'options' },
        { title: 'Fixed link', name: 'options' }
      ]
    }
  ],
  topbar: [
    {
      title: 'DESTINATION NUMBER',
      icon: 'admin-comments',
      name: 'search_destination'
    },
    {
      title: 'Available',
      icon: 'admin-users',
      name: 'status'
    }
  ],
  alrambar: [
    {
      title: '',
      icon: 'admin-comments',
      name: 'comments',
      children: [
        { title: 'Unread 5', name: 'comments' },
        { title: 'See All Msgs', name: 'parameter', params: { name: 'Drugi' } }
      ]
    },
    {
      title: '',
      icon: 'welcome-view-site',
      name: 'demo',
      children: [
        { title: 'Alarm1', name: 'comments' },
        { title: 'Alarm2', name: 'comments' },
        { title: 'See All Notifications', name: 'parameter', params: { name: 'Drugi' } }
      ]
    }
  ]
}

/**
 * Getters
 * @type {Object}
 */
const getters = {
  sidebar: state => state.sidebar,
  topbar: state => state.topbar,
  alrambar: state => state.alrambar
}

/**
 * Mutations
 * @type {Object}
 */
const mutations = {

}

/**
 * Actions
 * @type {Object}
 */
const actions = {

}

// Export module
export default { state, getters, mutations, actions }
