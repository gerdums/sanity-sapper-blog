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
                  buildHookId: '5cf9d13a1e8ef3ffc2aabc85',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-6er2kmuk',
                  apiId: 'b638f0bd-522a-4398-9017-12a535a4307c'
                },
                {
                  buildHookId: '5cf9d13a737aa9f7ccc5d220',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-bj4npa9n',
                  apiId: '1e10721a-d64f-4717-b183-6e2c7cdfd715'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gerdums/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-bj4npa9n.netlify.com', category: 'apps'}
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
