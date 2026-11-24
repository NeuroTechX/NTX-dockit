// This guide now lives on neurotechx.org. Send readers of the old Read the Docs pages there.
(function () {
    var routes = {
        'index': '/guide',
        'chapter-guidelines': '/community/chapter-guidelines',
        'community-growth': '/community/growth',
        'getting-started': '/education/getting-started',
        'resources': '/education/resources',
        'chapter-onboarding': '/community/start-a-chapter',
        'student-club-onboarding': '/students/start-a-club',
        'conduct': '/code-of-conduct'
    };
    var page = window.location.pathname.split('/').pop().replace(/\.html$/, '').toLowerCase() || 'index';
    window.location.replace('https://neurotechx.org' + (routes[page] || '/guide/' + page));
})();
