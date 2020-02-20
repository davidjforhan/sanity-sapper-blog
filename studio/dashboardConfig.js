export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4e145d2d8f3240cf8f1a84',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-auwnkj9s',
                  apiId: 'a03b037e-a4ff-4e0c-86e9-5bdd1b0d3ecb'
                },
                {
                  buildHookId: '5e4e145d4e7ca15445a8d8a4',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-pwfdfct5',
                  apiId: '8dfa3f6e-0f84-476b-8413-49b6cb02d769'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/davidjforhan/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-pwfdfct5.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
