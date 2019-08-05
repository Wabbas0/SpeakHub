export default [
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/18080",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18080/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18080/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18080/events",
    html_url: "https://github.com/ant-design/ant-design/issues/18080",
    id: 476643819,
    node_id: "MDU6SXNzdWU0NzY2NDM4MTk=",
    number: 18080,
    title: "怎么避免 antd 组件重复打包",
    user: {
      login: "Go7hic",
      id: 3821390,
      node_id: "MDQ6VXNlcjM4MjEzOTA=",
      avatar_url: "https://avatars3.githubusercontent.com/u/3821390?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Go7hic",
      html_url: "https://github.com/Go7hic",
      followers_url: "https://api.github.com/users/Go7hic/followers",
      following_url:
        "https://api.github.com/users/Go7hic/following{/other_user}",
      gists_url: "https://api.github.com/users/Go7hic/gists{/gist_id}",
      starred_url: "https://api.github.com/users/Go7hic/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Go7hic/subscriptions",
      organizations_url: "https://api.github.com/users/Go7hic/orgs",
      repos_url: "https://api.github.com/users/Go7hic/repos",
      events_url: "https://api.github.com/users/Go7hic/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Go7hic/received_events",
      type: "User",
      site_admin: false
    },
    labels: [],
    state: "open",
    locked: false,
    assignee: {
      login: "yesmeck",
      id: 465125,
      node_id: "MDQ6VXNlcjQ2NTEyNQ==",
      avatar_url: "https://avatars0.githubusercontent.com/u/465125?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/yesmeck",
      html_url: "https://github.com/yesmeck",
      followers_url: "https://api.github.com/users/yesmeck/followers",
      following_url:
        "https://api.github.com/users/yesmeck/following{/other_user}",
      gists_url: "https://api.github.com/users/yesmeck/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/yesmeck/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/yesmeck/subscriptions",
      organizations_url: "https://api.github.com/users/yesmeck/orgs",
      repos_url: "https://api.github.com/users/yesmeck/repos",
      events_url: "https://api.github.com/users/yesmeck/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/yesmeck/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "yesmeck",
        id: 465125,
        node_id: "MDQ6VXNlcjQ2NTEyNQ==",
        avatar_url: "https://avatars0.githubusercontent.com/u/465125?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/yesmeck",
        html_url: "https://github.com/yesmeck",
        followers_url: "https://api.github.com/users/yesmeck/followers",
        following_url:
          "https://api.github.com/users/yesmeck/following{/other_user}",
        gists_url: "https://api.github.com/users/yesmeck/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/yesmeck/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/yesmeck/subscriptions",
        organizations_url: "https://api.github.com/users/yesmeck/orgs",
        repos_url: "https://api.github.com/users/yesmeck/repos",
        events_url: "https://api.github.com/users/yesmeck/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/yesmeck/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 2,
    created_at: "2019-08-05T03:52:02Z",
    updated_at: "2019-08-05T05:32:40Z",
    closed_at: null,
    author_association: "CONTRIBUTOR",
    body:
      "- [x] I have searched the [issues](https://github.com/ant-design/ant-design/issues) of this repository and believe that this is not a duplicate.\r\n\r\n### What problem does this feature solve?\r\n当我用 antd 写了一个小项目或者组件，然后在其他新项目里面通过 npm 方式引入这个组件，然后那个项目也用了 antd，这时候要是新项目和那个 npm包里面用了相同组件，貌似会打包两份 antd 的组件，目前我只能通过 submodule 方式引入这个小项目或组件，不能通过 npm 方式引入，但是要是多几个这种小项目组件感觉就不好维护了，不知道官方有没有啥好的建议，或者是已经有方案了只是我不知道的。\r\n\r\n### What does the proposed API look like?\r\nAPI 暂时没想到，但是希望能有一个工具打包的时候 检查是否已经有该组件了  有就不再打包了。或者官方有更好的解决方案\r\n\r\n\r\n<!-- generated by ant-design-issue-helper. DO NOT REMOVE -->"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/18079",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18079/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18079/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18079/events",
    html_url: "https://github.com/ant-design/ant-design/issues/18079",
    id: 476642992,
    node_id: "MDU6SXNzdWU0NzY2NDI5OTI=",
    number: 18079,
    title: "Transfer table 分页时 左上角数量期望显示总数而不是当前页码数量",
    user: {
      login: "LiYanGang",
      id: 20022163,
      node_id: "MDQ6VXNlcjIwMDIyMTYz",
      avatar_url: "https://avatars1.githubusercontent.com/u/20022163?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/LiYanGang",
      html_url: "https://github.com/LiYanGang",
      followers_url: "https://api.github.com/users/LiYanGang/followers",
      following_url:
        "https://api.github.com/users/LiYanGang/following{/other_user}",
      gists_url: "https://api.github.com/users/LiYanGang/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/LiYanGang/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/LiYanGang/subscriptions",
      organizations_url: "https://api.github.com/users/LiYanGang/orgs",
      repos_url: "https://api.github.com/users/LiYanGang/repos",
      events_url: "https://api.github.com/users/LiYanGang/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/LiYanGang/received_events",
      type: "User",
      site_admin: false
    },
    labels: [],
    state: "open",
    locked: false,
    assignee: {
      login: "yutingzhao1991",
      id: 1061968,
      node_id: "MDQ6VXNlcjEwNjE5Njg=",
      avatar_url: "https://avatars0.githubusercontent.com/u/1061968?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/yutingzhao1991",
      html_url: "https://github.com/yutingzhao1991",
      followers_url: "https://api.github.com/users/yutingzhao1991/followers",
      following_url:
        "https://api.github.com/users/yutingzhao1991/following{/other_user}",
      gists_url: "https://api.github.com/users/yutingzhao1991/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/yutingzhao1991/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/yutingzhao1991/subscriptions",
      organizations_url: "https://api.github.com/users/yutingzhao1991/orgs",
      repos_url: "https://api.github.com/users/yutingzhao1991/repos",
      events_url:
        "https://api.github.com/users/yutingzhao1991/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/yutingzhao1991/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "yutingzhao1991",
        id: 1061968,
        node_id: "MDQ6VXNlcjEwNjE5Njg=",
        avatar_url: "https://avatars0.githubusercontent.com/u/1061968?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/yutingzhao1991",
        html_url: "https://github.com/yutingzhao1991",
        followers_url: "https://api.github.com/users/yutingzhao1991/followers",
        following_url:
          "https://api.github.com/users/yutingzhao1991/following{/other_user}",
        gists_url:
          "https://api.github.com/users/yutingzhao1991/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/yutingzhao1991/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/yutingzhao1991/subscriptions",
        organizations_url: "https://api.github.com/users/yutingzhao1991/orgs",
        repos_url: "https://api.github.com/users/yutingzhao1991/repos",
        events_url:
          "https://api.github.com/users/yutingzhao1991/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/yutingzhao1991/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 1,
    created_at: "2019-08-05T03:47:15Z",
    updated_at: "2019-08-05T03:48:25Z",
    closed_at: null,
    author_association: "NONE",
    body:
      "- [ ] I have searched the [issues](https://github.com/ant-design/ant-design/issues) of this repository and believe that this is not a duplicate.\r\n\r\n### Reproduction link\r\n[https://codepen.io/pen/?&editable=true&editors=001](https://codepen.io/pen/?&editable=true&editors=001)\r\n\r\n### Steps to reproduce\r\n必现\r\n\r\n### What is expected?\r\n总页数\r\n\r\n### What is actually happening?\r\n当前页码数量\r\n\r\n| Environment | Info |\r\n|---|---|\r\n| antd | 3.21.0 |\r\n| React | 16.7 |\r\n| System | mac |\r\n| Browser | chrome |\r\n\r\n\r\n<!-- generated by ant-design-issue-helper. DO NOT REMOVE -->"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/18068",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18068/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18068/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18068/events",
    html_url: "https://github.com/ant-design/ant-design/issues/18068",
    id: 476455954,
    node_id: "MDU6SXNzdWU0NzY0NTU5NTQ=",
    number: 18068,
    title: "Table border error in chrome of Win10",
    user: {
      login: "Junyan",
      id: 17005098,
      node_id: "MDQ6VXNlcjE3MDA1MDk4",
      avatar_url: "https://avatars1.githubusercontent.com/u/17005098?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Junyan",
      html_url: "https://github.com/Junyan",
      followers_url: "https://api.github.com/users/Junyan/followers",
      following_url:
        "https://api.github.com/users/Junyan/following{/other_user}",
      gists_url: "https://api.github.com/users/Junyan/gists{/gist_id}",
      starred_url: "https://api.github.com/users/Junyan/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Junyan/subscriptions",
      organizations_url: "https://api.github.com/users/Junyan/orgs",
      repos_url: "https://api.github.com/users/Junyan/repos",
      events_url: "https://api.github.com/users/Junyan/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Junyan/received_events",
      type: "User",
      site_admin: false
    },
    labels: [],
    state: "open",
    locked: false,
    assignee: {
      login: "afc163",
      id: 507615,
      node_id: "MDQ6VXNlcjUwNzYxNQ==",
      avatar_url: "https://avatars1.githubusercontent.com/u/507615?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/afc163",
      html_url: "https://github.com/afc163",
      followers_url: "https://api.github.com/users/afc163/followers",
      following_url:
        "https://api.github.com/users/afc163/following{/other_user}",
      gists_url: "https://api.github.com/users/afc163/gists{/gist_id}",
      starred_url: "https://api.github.com/users/afc163/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/afc163/subscriptions",
      organizations_url: "https://api.github.com/users/afc163/orgs",
      repos_url: "https://api.github.com/users/afc163/repos",
      events_url: "https://api.github.com/users/afc163/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/afc163/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "afc163",
        id: 507615,
        node_id: "MDQ6VXNlcjUwNzYxNQ==",
        avatar_url: "https://avatars1.githubusercontent.com/u/507615?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/afc163",
        html_url: "https://github.com/afc163",
        followers_url: "https://api.github.com/users/afc163/followers",
        following_url:
          "https://api.github.com/users/afc163/following{/other_user}",
        gists_url: "https://api.github.com/users/afc163/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/afc163/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/afc163/subscriptions",
        organizations_url: "https://api.github.com/users/afc163/orgs",
        repos_url: "https://api.github.com/users/afc163/repos",
        events_url: "https://api.github.com/users/afc163/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/afc163/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 2,
    created_at: "2019-08-03T14:19:48Z",
    updated_at: "2019-08-04T04:35:11Z",
    closed_at: null,
    author_association: "NONE",
    body:
      "- [x] I have searched the [issues](https://github.com/ant-design/ant-design/issues) of this repository and believe that this is not a duplicate.\r\n\r\n### Reproduction link\r\n[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/inspiring-voice-tuhq5)\r\n\r\n### Steps to reproduce\r\n- Win10 System > Settings > Display > Scale and layout settings page 150%. It's a default setting of  notebook.\r\n- Width of column has percentage.\r\n\r\n\r\n### What is expected?\r\nCorrect border.\r\n\r\n### What is actually happening?\r\n- Border is wrong now, beacause scrollbar of header table is wrong.\r\n\r\n| Environment | Info |\r\n|---|---|\r\n| antd | 3.20.7 |\r\n| React | 16.8.6 |\r\n| System | Windows 10 |\r\n| Browser | Chrome 76.0.3809.87 |\r\n\r\n![image](https://user-images.githubusercontent.com/17005098/62413064-ab04f580-b63d-11e9-8678-580ad46f56e7.png)\r\n\r\n![image](https://user-images.githubusercontent.com/17005098/62413048-506b9980-b63d-11e9-9a17-b2c80c205fb3.png)\r\n\r\n![image](https://user-images.githubusercontent.com/17005098/62413055-801aa180-b63d-11e9-97e4-e6b89dac6f8f.png)\r\n\r\n<!-- generated by ant-design-issue-helper. DO NOT REMOVE -->"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/18051",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18051/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18051/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18051/events",
    html_url: "https://github.com/ant-design/ant-design/pull/18051",
    id: 476109745,
    node_id: "MDExOlB1bGxSZXF1ZXN0MzAzNzI5NzU1",
    number: 18051,
    title: "perf: migrate tslint to eslint",
    user: {
      login: "orzyyyy",
      id: 24520193,
      node_id: "MDQ6VXNlcjI0NTIwMTkz",
      avatar_url: "https://avatars3.githubusercontent.com/u/24520193?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/orzyyyy",
      html_url: "https://github.com/orzyyyy",
      followers_url: "https://api.github.com/users/orzyyyy/followers",
      following_url:
        "https://api.github.com/users/orzyyyy/following{/other_user}",
      gists_url: "https://api.github.com/users/orzyyyy/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/orzyyyy/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/orzyyyy/subscriptions",
      organizations_url: "https://api.github.com/users/orzyyyy/orgs",
      repos_url: "https://api.github.com/users/orzyyyy/repos",
      events_url: "https://api.github.com/users/orzyyyy/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/orzyyyy/received_events",
      type: "User",
      site_admin: false
    },
    labels: [
      {
        id: 1310631527,
        node_id: "MDU6TGFiZWwxMzEwNjMxNTI3",
        url:
          "https://api.github.com/repos/ant-design/ant-design/labels/PR:%20unreviewed",
        name: "PR: unreviewed",
        color: "fbca04",
        default: false
      }
    ],
    state: "open",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 13,
    created_at: "2019-08-02T10:23:34Z",
    updated_at: "2019-08-03T06:45:54Z",
    closed_at: null,
    author_association: "CONTRIBUTOR",
    pull_request: {
      url: "https://api.github.com/repos/ant-design/ant-design/pulls/18051",
      html_url: "https://github.com/ant-design/ant-design/pull/18051",
      diff_url: "https://github.com/ant-design/ant-design/pull/18051.diff",
      patch_url: "https://github.com/ant-design/ant-design/pull/18051.patch"
    },
    body:
      "<!--\r\nFirst of all, thank you for your contribution! 😄\r\n\r\nNew feature please send pull request to feature branch, and rest to master branch.\r\nPull request will be merged after one of collaborators approve.\r\nPlease makes sure that these form are filled before submitting your pull request, thank you!\r\n\r\n[[中文版模板 / Chinese template](https://github.com/ant-design/ant-design/blob/master/.github/PULL_REQUEST_TEMPLATE/pr_cn.md)]\r\n-->\r\n\r\n### 🤔 This is a ...\r\n\r\n- [ ] New feature\r\n- [ ] Bug fix\r\n- [ ] Site / document update\r\n- [ ] Component style update\r\n- [ ] TypeScript definition update\r\n- [ ] Refactoring\r\n- [x] Code style optimization\r\n- [ ] Test Case\r\n- [ ] Branch merge\r\n- [ ] Other (about what?)\r\n\r\n### 🔗 Related issue link\r\n\r\n<!--\r\n1. Describe the source of requirement, like related issue link.\r\n-->\r\n\r\n### 💡 Background and solution\r\n\r\n<!--\r\n1. Describe the problem and the scenario.\r\n2. GIF or snapshot should be provided if includes UI/interactive modification.\r\n3. How to fix the problem, and list final API implementation and usage sample if that is an new feature.\r\n-->\r\n\r\n### 📝 Changelog\r\n\r\n<!--\r\nDescribe changes from userside, and list all potential break changes or other risks.\r\n--->\r\n\r\n| Language   | Changelog |\r\n| ---------- | --------- |\r\n| 🇺🇸 English |    migrate tslint to eslint       |\r\n| 🇨🇳 Chinese |    从 tslint 迁移到 eslint       |\r\n\r\n### ☑️ Self Check before Merge\r\n\r\n- [ ] Doc is updated/provided or not needed\r\n- [ ] Demo is updated/provided or not needed\r\n- [ ] TypeScript definition is updated/provided or not needed\r\n- [ ] Changelog is provided or not needed\r\n\n\n-----\n[View rendered components/card/demo/loading.md](https://github.com/orzyyyy/ant-design/blob/perf/components/card/demo/loading.md)\n[View rendered components/card/demo/meta.md](https://github.com/orzyyyy/ant-design/blob/perf/components/card/demo/meta.md)\n[View rendered components/comment/demo/basic.md](https://github.com/orzyyyy/ant-design/blob/perf/components/comment/demo/basic.md)\n[View rendered components/comment/demo/list.md](https://github.com/orzyyyy/ant-design/blob/perf/components/comment/demo/list.md)\n[View rendered components/comment/demo/nested.md](https://github.com/orzyyyy/ant-design/blob/perf/components/comment/demo/nested.md)\n[View rendered components/drawer/demo/user-profile.md](https://github.com/orzyyyy/ant-design/blob/perf/components/drawer/demo/user-profile.md)\n[View rendered components/list/demo/loadmore.md](https://github.com/orzyyyy/ant-design/blob/perf/components/list/demo/loadmore.md)\n[View rendered components/list/demo/vertical.md](https://github.com/orzyyyy/ant-design/blob/perf/components/list/demo/vertical.md)\n[View rendered components/mention/demo/avatar.md](https://github.com/orzyyyy/ant-design/blob/perf/components/mention/demo/avatar.md)\n[View rendered components/mention/demo/custom-tag.md](https://github.com/orzyyyy/ant-design/blob/perf/components/mention/demo/custom-tag.md)\n[View rendered components/skeleton/demo/list.md](https://github.com/orzyyyy/ant-design/blob/perf/components/skeleton/demo/list.md)\n[View rendered components/table/demo/basic.md](https://github.com/orzyyyy/ant-design/blob/perf/components/table/demo/basic.md)\n[View rendered components/table/demo/bordered.md](https://github.com/orzyyyy/ant-design/blob/perf/components/table/demo/bordered.md)\n[View rendered components/table/demo/dynamic-settings.md](https://github.com/orzyyyy/ant-design/blob/perf/components/table/demo/dynamic-settings.md)\n[View rendered components/table/demo/expand.md](https://github.com/orzyyyy/ant-design/blob/perf/components/table/demo/expand.md)\n[View rendered components/table/demo/fixed-columns-header.md](https://github.com/orzyyyy/ant-design/blob/perf/components/table/demo/fixed-columns-header.md)\n[View rendered components/table/demo/fixed-columns.md](https://github.com/orzyyyy/ant-design/blob/perf/components/table/demo/fixed-columns.md)\n[View rendered components/table/demo/nested-table.md](https://github.com/orzyyyy/ant-design/blob/perf/components/table/demo/nested-table.md)\n[View rendered components/table/demo/row-selection.md](https://github.com/orzyyyy/ant-design/blob/perf/components/table/demo/row-selection.md)\n[View rendered components/transfer/demo/table-transfer.md](https://github.com/orzyyyy/ant-design/blob/perf/components/transfer/demo/table-transfer.md)"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/18050",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18050/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18050/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18050/events",
    html_url: "https://github.com/ant-design/ant-design/issues/18050",
    id: 476088709,
    node_id: "MDU6SXNzdWU0NzYwODg3MDk=",
    number: 18050,
    title:
      "Adding to the ValidateFieldOptions type to support the async-validator 1.11.3 addition of the suppressWarning option",
    user: {
      login: "matthew-davis",
      id: 4369431,
      node_id: "MDQ6VXNlcjQzNjk0MzE=",
      avatar_url: "https://avatars2.githubusercontent.com/u/4369431?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/matthew-davis",
      html_url: "https://github.com/matthew-davis",
      followers_url: "https://api.github.com/users/matthew-davis/followers",
      following_url:
        "https://api.github.com/users/matthew-davis/following{/other_user}",
      gists_url: "https://api.github.com/users/matthew-davis/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/matthew-davis/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/matthew-davis/subscriptions",
      organizations_url: "https://api.github.com/users/matthew-davis/orgs",
      repos_url: "https://api.github.com/users/matthew-davis/repos",
      events_url: "https://api.github.com/users/matthew-davis/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/matthew-davis/received_events",
      type: "User",
      site_admin: false
    },
    labels: [],
    state: "open",
    locked: false,
    assignee: {
      login: "yutingzhao1991",
      id: 1061968,
      node_id: "MDQ6VXNlcjEwNjE5Njg=",
      avatar_url: "https://avatars0.githubusercontent.com/u/1061968?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/yutingzhao1991",
      html_url: "https://github.com/yutingzhao1991",
      followers_url: "https://api.github.com/users/yutingzhao1991/followers",
      following_url:
        "https://api.github.com/users/yutingzhao1991/following{/other_user}",
      gists_url: "https://api.github.com/users/yutingzhao1991/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/yutingzhao1991/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/yutingzhao1991/subscriptions",
      organizations_url: "https://api.github.com/users/yutingzhao1991/orgs",
      repos_url: "https://api.github.com/users/yutingzhao1991/repos",
      events_url:
        "https://api.github.com/users/yutingzhao1991/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/yutingzhao1991/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "yutingzhao1991",
        id: 1061968,
        node_id: "MDQ6VXNlcjEwNjE5Njg=",
        avatar_url: "https://avatars0.githubusercontent.com/u/1061968?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/yutingzhao1991",
        html_url: "https://github.com/yutingzhao1991",
        followers_url: "https://api.github.com/users/yutingzhao1991/followers",
        following_url:
          "https://api.github.com/users/yutingzhao1991/following{/other_user}",
        gists_url:
          "https://api.github.com/users/yutingzhao1991/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/yutingzhao1991/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/yutingzhao1991/subscriptions",
        organizations_url: "https://api.github.com/users/yutingzhao1991/orgs",
        repos_url: "https://api.github.com/users/yutingzhao1991/repos",
        events_url:
          "https://api.github.com/users/yutingzhao1991/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/yutingzhao1991/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 0,
    created_at: "2019-08-02T09:33:36Z",
    updated_at: "2019-08-02T09:33:37Z",
    closed_at: null,
    author_association: "NONE",
    body:
      "- [ ] I have searched the [issues](https://github.com/ant-design/ant-design/issues) of this repository and believe that this is not a duplicate.\r\n\r\n### What problem does this feature solve?\r\nThis keeps ant-design in line with async-validator and removes those console warnings, particularly when testing, that pop up when a form is submitted with un-validated fields.\r\n\r\n### What does the proposed API look like?\r\nThis is only a small change adding an optional property to the ValidateFieldOptions Type. \r\n\r\ncomponents/form/Form.tsx - immediately after line 134: \r\n```javascript\r\n/** async-validator: suppressWarning option */\r\nsuppressWarning?: boolean;\r\n```\r\n\r\ncomponents/form/index.en-US.md - immediately after line 121:\r\n```markdown\r\n| options.suppressWarning | Set to `true` to remove async-validator warnings when fields fail validation on submission | boolean | false | 3.9.3 |\r\n```\r\n\r\nAnd my Chinese is rusty (read non-existent) components/form/index.zh-CN.md - immediately after line 124:\r\n```markdown\r\n| options.suppressWarning | 调成 `true` 去除 async-validator 字段在提交时验证失败时发出警告 | boolean | false | 3.9.3 |\r\n```\r\n\r\nAs for the version numbers in each of the markdown files I'd suppose that they would need to be updated in line with what version number was used.\r\n\r\n\r\n<!-- generated by ant-design-issue-helper. DO NOT REMOVE -->"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/18042",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18042/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18042/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18042/events",
    html_url: "https://github.com/ant-design/ant-design/issues/18042",
    id: 475984623,
    node_id: "MDU6SXNzdWU0NzU5ODQ2MjM=",
    number: 18042,
    title: "设置scroll={{ x: false, y: 160 }} 顶部出现白边",
    user: {
      login: "skyunBoss",
      id: 29365288,
      node_id: "MDQ6VXNlcjI5MzY1Mjg4",
      avatar_url: "https://avatars2.githubusercontent.com/u/29365288?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/skyunBoss",
      html_url: "https://github.com/skyunBoss",
      followers_url: "https://api.github.com/users/skyunBoss/followers",
      following_url:
        "https://api.github.com/users/skyunBoss/following{/other_user}",
      gists_url: "https://api.github.com/users/skyunBoss/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/skyunBoss/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/skyunBoss/subscriptions",
      organizations_url: "https://api.github.com/users/skyunBoss/orgs",
      repos_url: "https://api.github.com/users/skyunBoss/repos",
      events_url: "https://api.github.com/users/skyunBoss/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/skyunBoss/received_events",
      type: "User",
      site_admin: false
    },
    labels: [
      {
        id: 340842022,
        node_id: "MDU6TGFiZWwzNDA4NDIwMjI=",
        url:
          "https://api.github.com/repos/ant-design/ant-design/labels/%F0%9F%A4%94%20Need%20Reproduce",
        name: "🤔 Need Reproduce",
        color: "fef2c0",
        default: false
      }
    ],
    state: "open",
    locked: false,
    assignee: {
      login: "chenshuai2144",
      id: 8186664,
      node_id: "MDQ6VXNlcjgxODY2NjQ=",
      avatar_url: "https://avatars0.githubusercontent.com/u/8186664?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/chenshuai2144",
      html_url: "https://github.com/chenshuai2144",
      followers_url: "https://api.github.com/users/chenshuai2144/followers",
      following_url:
        "https://api.github.com/users/chenshuai2144/following{/other_user}",
      gists_url: "https://api.github.com/users/chenshuai2144/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/chenshuai2144/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/chenshuai2144/subscriptions",
      organizations_url: "https://api.github.com/users/chenshuai2144/orgs",
      repos_url: "https://api.github.com/users/chenshuai2144/repos",
      events_url: "https://api.github.com/users/chenshuai2144/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/chenshuai2144/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "chenshuai2144",
        id: 8186664,
        node_id: "MDQ6VXNlcjgxODY2NjQ=",
        avatar_url: "https://avatars0.githubusercontent.com/u/8186664?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/chenshuai2144",
        html_url: "https://github.com/chenshuai2144",
        followers_url: "https://api.github.com/users/chenshuai2144/followers",
        following_url:
          "https://api.github.com/users/chenshuai2144/following{/other_user}",
        gists_url: "https://api.github.com/users/chenshuai2144/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/chenshuai2144/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/chenshuai2144/subscriptions",
        organizations_url: "https://api.github.com/users/chenshuai2144/orgs",
        repos_url: "https://api.github.com/users/chenshuai2144/repos",
        events_url:
          "https://api.github.com/users/chenshuai2144/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/chenshuai2144/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 7,
    created_at: "2019-08-02T03:56:39Z",
    updated_at: "2019-08-02T07:08:30Z",
    closed_at: null,
    author_association: "NONE",
    body:
      "- [ ] I have searched the [issues](https://github.com/ant-design/ant-design/issues) of this repository and believe that this is not a duplicate.\r\n\r\n### Reproduction link\r\n[http://i1.fuimg.com/695898/9deec5e6eed32674.png](http://i1.fuimg.com/695898/9deec5e6eed32674.png)\r\n\r\n### Steps to reproduce\r\n本地使用antd会出现，部署服务器不会出现，不明白为啥\r\n\r\n### What is expected?\r\n希望不要出现白色块\r\n\r\n### What is actually happening?\r\n出现白色块\r\n\r\n| Environment | Info |\r\n|---|---|\r\n| antd | 4.0.0-alpha.0 |\r\n| React | 16.8 |\r\n| System | window10 |\r\n| Browser | chrome75.0.3770.100 |\r\n\r\n\r\n<!-- generated by ant-design-issue-helper. DO NOT REMOVE -->"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/18033",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18033/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18033/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18033/events",
    html_url: "https://github.com/ant-design/ant-design/pull/18033",
    id: 475744857,
    node_id: "MDExOlB1bGxSZXF1ZXN0MzAzNDM1ODE1",
    number: 18033,
    title: "WIP: feat: use @ant-design/icons@4.0",
    user: {
      login: "vagusX",
      id: 6828924,
      node_id: "MDQ6VXNlcjY4Mjg5MjQ=",
      avatar_url: "https://avatars3.githubusercontent.com/u/6828924?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/vagusX",
      html_url: "https://github.com/vagusX",
      followers_url: "https://api.github.com/users/vagusX/followers",
      following_url:
        "https://api.github.com/users/vagusX/following{/other_user}",
      gists_url: "https://api.github.com/users/vagusX/gists{/gist_id}",
      starred_url: "https://api.github.com/users/vagusX/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/vagusX/subscriptions",
      organizations_url: "https://api.github.com/users/vagusX/orgs",
      repos_url: "https://api.github.com/users/vagusX/repos",
      events_url: "https://api.github.com/users/vagusX/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/vagusX/received_events",
      type: "User",
      site_admin: false
    },
    labels: [],
    state: "open",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 4,
    created_at: "2019-08-01T15:21:34Z",
    updated_at: "2019-08-02T05:54:59Z",
    closed_at: null,
    author_association: "CONTRIBUTOR",
    pull_request: {
      url: "https://api.github.com/repos/ant-design/ant-design/pulls/18033",
      html_url: "https://github.com/ant-design/ant-design/pull/18033",
      diff_url: "https://github.com/ant-design/ant-design/pull/18033.diff",
      patch_url: "https://github.com/ant-design/ant-design/pull/18033.patch"
    },
    body:
      "<!--\r\nFirst of all, thank you for your contribution! 😄\r\n\r\nNew feature please send pull request to feature branch, and rest to master branch.\r\nPull request will be merged after one of collaborators approve.\r\nPlease makes sure that these form are filled before submitting your pull request, thank you!\r\n\r\n[[中文版模板 / Chinese template](https://github.com/ant-design/ant-design/blob/master/.github/PULL_REQUEST_TEMPLATE/pr_cn.md)]\r\n-->\r\n\r\n### 🤔 This is a ...\r\n\r\n- [x] New feature\r\n- [ ] Bug fix\r\n- [ ] Site / document update\r\n- [ ] Component style update\r\n- [ ] TypeScript definition update\r\n- [ ] Refactoring\r\n- [ ] Code style optimization\r\n- [ ] Test Case\r\n- [ ] Branch merge\r\n- [ ] Other (about what?)\r\n\r\n### 🔗 Related issue link\r\n\r\nhttps://github.com/ant-design/ant-design/issues/16911\r\n\r\n### 💡 Background and solution\r\n\r\nuse @ant-design/icons v4.0 to replace the icon solution in antd v3\r\n\r\n<!--\r\n1. Describe the problem and the scenario.\r\n2. GIF or snapshot should be provided if includes UI/interactive modification.\r\n3. How to fix the problem, and list final API implementation and usage sample if that is an new feature.\r\n-->\r\n\r\n### 📝 Changelog\r\n\r\nnot yet\r\n\r\n<!--\r\nDescribe changes from userside, and list all potential break changes or other risks.\r\n--->\r\n\r\n| Language   | Changelog |\r\n| ---------- | --------- |\r\n| 🇺🇸 English |           |\r\n| 🇨🇳 Chinese |           |\r\n\r\n### ☑️ Self Check before Merge\r\n\r\n- [ ] Doc is updated/provided or not needed\r\n- [ ] Demo is updated/provided or not needed\r\n- [ ] TypeScript definition is updated/provided or not needed\r\n- [ ] Changelog is provided or not needed\r\n"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/18022",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18022/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18022/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18022/events",
    html_url: "https://github.com/ant-design/ant-design/issues/18022",
    id: 475529488,
    node_id: "MDU6SXNzdWU0NzU1Mjk0ODg=",
    number: 18022,
    title: "menu中含有fragment会失去作用",
    user: {
      login: "Fled8617",
      id: 35049517,
      node_id: "MDQ6VXNlcjM1MDQ5NTE3",
      avatar_url: "https://avatars3.githubusercontent.com/u/35049517?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Fled8617",
      html_url: "https://github.com/Fled8617",
      followers_url: "https://api.github.com/users/Fled8617/followers",
      following_url:
        "https://api.github.com/users/Fled8617/following{/other_user}",
      gists_url: "https://api.github.com/users/Fled8617/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Fled8617/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Fled8617/subscriptions",
      organizations_url: "https://api.github.com/users/Fled8617/orgs",
      repos_url: "https://api.github.com/users/Fled8617/repos",
      events_url: "https://api.github.com/users/Fled8617/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Fled8617/received_events",
      type: "User",
      site_admin: false
    },
    labels: [],
    state: "open",
    locked: false,
    assignee: {
      login: "yutingzhao1991",
      id: 1061968,
      node_id: "MDQ6VXNlcjEwNjE5Njg=",
      avatar_url: "https://avatars0.githubusercontent.com/u/1061968?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/yutingzhao1991",
      html_url: "https://github.com/yutingzhao1991",
      followers_url: "https://api.github.com/users/yutingzhao1991/followers",
      following_url:
        "https://api.github.com/users/yutingzhao1991/following{/other_user}",
      gists_url: "https://api.github.com/users/yutingzhao1991/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/yutingzhao1991/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/yutingzhao1991/subscriptions",
      organizations_url: "https://api.github.com/users/yutingzhao1991/orgs",
      repos_url: "https://api.github.com/users/yutingzhao1991/repos",
      events_url:
        "https://api.github.com/users/yutingzhao1991/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/yutingzhao1991/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "yutingzhao1991",
        id: 1061968,
        node_id: "MDQ6VXNlcjEwNjE5Njg=",
        avatar_url: "https://avatars0.githubusercontent.com/u/1061968?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/yutingzhao1991",
        html_url: "https://github.com/yutingzhao1991",
        followers_url: "https://api.github.com/users/yutingzhao1991/followers",
        following_url:
          "https://api.github.com/users/yutingzhao1991/following{/other_user}",
        gists_url:
          "https://api.github.com/users/yutingzhao1991/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/yutingzhao1991/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/yutingzhao1991/subscriptions",
        organizations_url: "https://api.github.com/users/yutingzhao1991/orgs",
        repos_url: "https://api.github.com/users/yutingzhao1991/repos",
        events_url:
          "https://api.github.com/users/yutingzhao1991/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/yutingzhao1991/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 3,
    created_at: "2019-08-01T07:52:05Z",
    updated_at: "2019-08-05T02:39:33Z",
    closed_at: null,
    author_association: "NONE",
    body:
      "- [ ] I have searched the [issues](https://github.com/ant-design/ant-design/issues) of this repository and believe that this is not a duplicate.\r\n\r\n### Reproduction link\r\n[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/ancient-night-g9rcx)\r\n\r\n### Steps to reproduce\r\n悬浮即可\r\n\r\n### What is expected?\r\n可以插入fragment\r\n\r\n### What is actually happening?\r\n不可插入fragment\r\n\r\n| Environment | Info |\r\n|---|---|\r\n| antd | 3.20.7 |\r\n| React | 16.8  |\r\n| System | win |\r\n| Browser | chrome |\r\n\r\n---\r\n用数组方式可以，但是大部分情况还是会写<></>\r\n\r\n\r\n<!-- generated by ant-design-issue-helper. DO NOT REMOVE -->"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/18016",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18016/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18016/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18016/events",
    html_url: "https://github.com/ant-design/ant-design/issues/18016",
    id: 475460150,
    node_id: "MDU6SXNzdWU0NzU0NjAxNTA=",
    number: 18016,
    title: "Need tooltipProps prop for Slider tooltip",
    user: {
      login: "shaodahong",
      id: 14831261,
      node_id: "MDQ6VXNlcjE0ODMxMjYx",
      avatar_url: "https://avatars2.githubusercontent.com/u/14831261?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/shaodahong",
      html_url: "https://github.com/shaodahong",
      followers_url: "https://api.github.com/users/shaodahong/followers",
      following_url:
        "https://api.github.com/users/shaodahong/following{/other_user}",
      gists_url: "https://api.github.com/users/shaodahong/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/shaodahong/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/shaodahong/subscriptions",
      organizations_url: "https://api.github.com/users/shaodahong/orgs",
      repos_url: "https://api.github.com/users/shaodahong/repos",
      events_url: "https://api.github.com/users/shaodahong/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/shaodahong/received_events",
      type: "User",
      site_admin: false
    },
    labels: [],
    state: "open",
    locked: false,
    assignee: {
      login: "yesmeck",
      id: 465125,
      node_id: "MDQ6VXNlcjQ2NTEyNQ==",
      avatar_url: "https://avatars0.githubusercontent.com/u/465125?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/yesmeck",
      html_url: "https://github.com/yesmeck",
      followers_url: "https://api.github.com/users/yesmeck/followers",
      following_url:
        "https://api.github.com/users/yesmeck/following{/other_user}",
      gists_url: "https://api.github.com/users/yesmeck/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/yesmeck/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/yesmeck/subscriptions",
      organizations_url: "https://api.github.com/users/yesmeck/orgs",
      repos_url: "https://api.github.com/users/yesmeck/repos",
      events_url: "https://api.github.com/users/yesmeck/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/yesmeck/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "yesmeck",
        id: 465125,
        node_id: "MDQ6VXNlcjQ2NTEyNQ==",
        avatar_url: "https://avatars0.githubusercontent.com/u/465125?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/yesmeck",
        html_url: "https://github.com/yesmeck",
        followers_url: "https://api.github.com/users/yesmeck/followers",
        following_url:
          "https://api.github.com/users/yesmeck/following{/other_user}",
        gists_url: "https://api.github.com/users/yesmeck/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/yesmeck/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/yesmeck/subscriptions",
        organizations_url: "https://api.github.com/users/yesmeck/orgs",
        repos_url: "https://api.github.com/users/yesmeck/repos",
        events_url: "https://api.github.com/users/yesmeck/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/yesmeck/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 2,
    created_at: "2019-08-01T04:05:15Z",
    updated_at: "2019-08-03T02:08:18Z",
    closed_at: null,
    author_association: "CONTRIBUTOR",
    body:
      "- [x] I have searched the [issues](https://github.com/ant-design/ant-design/issues) of this repository and believe that this is not a duplicate.\r\n\r\n### What problem does this feature solve?\r\n设置 tooltip 的样式\r\n\r\n### What does the proposed API look like?\r\ntooltipProps\r\n\r\n### Related Issues\r\n#13416\r\n#15495\r\n\r\n<!-- generated by ant-design-issue-helper. DO NOT REMOVE -->"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/18012",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18012/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18012/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18012/events",
    html_url: "https://github.com/ant-design/ant-design/issues/18012",
    id: 475436327,
    node_id: "MDU6SXNzdWU0NzU0MzYzMjc=",
    number: 18012,
    title:
      "The treeDefaultExpandedKeys attribute or treeExpandedKeys attribute of the TreeSelect component will not open child node when dynamic data",
    user: {
      login: "lsunflower",
      id: 5770394,
      node_id: "MDQ6VXNlcjU3NzAzOTQ=",
      avatar_url: "https://avatars0.githubusercontent.com/u/5770394?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/lsunflower",
      html_url: "https://github.com/lsunflower",
      followers_url: "https://api.github.com/users/lsunflower/followers",
      following_url:
        "https://api.github.com/users/lsunflower/following{/other_user}",
      gists_url: "https://api.github.com/users/lsunflower/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/lsunflower/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/lsunflower/subscriptions",
      organizations_url: "https://api.github.com/users/lsunflower/orgs",
      repos_url: "https://api.github.com/users/lsunflower/repos",
      events_url: "https://api.github.com/users/lsunflower/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/lsunflower/received_events",
      type: "User",
      site_admin: false
    },
    labels: [],
    state: "open",
    locked: false,
    assignee: {
      login: "chenshuai2144",
      id: 8186664,
      node_id: "MDQ6VXNlcjgxODY2NjQ=",
      avatar_url: "https://avatars0.githubusercontent.com/u/8186664?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/chenshuai2144",
      html_url: "https://github.com/chenshuai2144",
      followers_url: "https://api.github.com/users/chenshuai2144/followers",
      following_url:
        "https://api.github.com/users/chenshuai2144/following{/other_user}",
      gists_url: "https://api.github.com/users/chenshuai2144/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/chenshuai2144/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/chenshuai2144/subscriptions",
      organizations_url: "https://api.github.com/users/chenshuai2144/orgs",
      repos_url: "https://api.github.com/users/chenshuai2144/repos",
      events_url: "https://api.github.com/users/chenshuai2144/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/chenshuai2144/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "chenshuai2144",
        id: 8186664,
        node_id: "MDQ6VXNlcjgxODY2NjQ=",
        avatar_url: "https://avatars0.githubusercontent.com/u/8186664?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/chenshuai2144",
        html_url: "https://github.com/chenshuai2144",
        followers_url: "https://api.github.com/users/chenshuai2144/followers",
        following_url:
          "https://api.github.com/users/chenshuai2144/following{/other_user}",
        gists_url: "https://api.github.com/users/chenshuai2144/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/chenshuai2144/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/chenshuai2144/subscriptions",
        organizations_url: "https://api.github.com/users/chenshuai2144/orgs",
        repos_url: "https://api.github.com/users/chenshuai2144/repos",
        events_url:
          "https://api.github.com/users/chenshuai2144/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/chenshuai2144/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 0,
    created_at: "2019-08-01T02:20:36Z",
    updated_at: "2019-08-01T02:22:15Z",
    closed_at: null,
    author_association: "NONE",
    body:
      "- [x] I have searched the [issues](https://github.com/ant-design/ant-design/issues) of this repository and believe that this is not a duplicate.\r\n\r\n### Reproduction link\r\n[https://codepen.io/lsunflower/pen/MNoorR?editors=0010](https://codepen.io/lsunflower/pen/MNoorR?editors=0010)\r\n\r\n### Steps to reproduce\r\nClick the treeselect,Only expanded the first level treenode.\r\n\r\n### What is expected?\r\nExpanded all keys  （treeExpandedKeys)\r\n\r\n### What is actually happening?\r\nOnly expanded the first level treenode.\r\n\r\n| Environment | Info |\r\n|---|---|\r\n| antd | 3.20.7 |\r\n| React | 16 |\r\n| System | windows10 |\r\n| Browser |  Google Chrome 75.0.3770.142 64bit |\r\n\r\n\r\n<!-- generated by ant-design-issue-helper. DO NOT REMOVE -->"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/18011",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18011/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18011/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18011/events",
    html_url: "https://github.com/ant-design/ant-design/pull/18011",
    id: 475262113,
    node_id: "MDExOlB1bGxSZXF1ZXN0MzAzMDQ5NTk2",
    number: 18011,
    title: "Feat site seo",
    user: {
      login: "ycjcl868",
      id: 13595509,
      node_id: "MDQ6VXNlcjEzNTk1NTA5",
      avatar_url: "https://avatars3.githubusercontent.com/u/13595509?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/ycjcl868",
      html_url: "https://github.com/ycjcl868",
      followers_url: "https://api.github.com/users/ycjcl868/followers",
      following_url:
        "https://api.github.com/users/ycjcl868/following{/other_user}",
      gists_url: "https://api.github.com/users/ycjcl868/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/ycjcl868/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/ycjcl868/subscriptions",
      organizations_url: "https://api.github.com/users/ycjcl868/orgs",
      repos_url: "https://api.github.com/users/ycjcl868/repos",
      events_url: "https://api.github.com/users/ycjcl868/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/ycjcl868/received_events",
      type: "User",
      site_admin: false
    },
    labels: [
      {
        id: 1310631616,
        node_id: "MDU6TGFiZWwxMzEwNjMxNjE2",
        url:
          "https://api.github.com/repos/ant-design/ant-design/labels/PR:%20reviewed-changes-requested",
        name: "PR: reviewed-changes-requested",
        color: "c2e0c6",
        default: false
      }
    ],
    state: "open",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 3,
    created_at: "2019-07-31T17:14:08Z",
    updated_at: "2019-07-31T17:28:12Z",
    closed_at: null,
    author_association: "MEMBER",
    pull_request: {
      url: "https://api.github.com/repos/ant-design/ant-design/pulls/18011",
      html_url: "https://github.com/ant-design/ant-design/pull/18011",
      diff_url: "https://github.com/ant-design/ant-design/pull/18011.diff",
      patch_url: "https://github.com/ant-design/ant-design/pull/18011.patch"
    },
    body: "wait https://github.com/benjycui/bisheng/pull/205"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/18007",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18007/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18007/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18007/events",
    html_url: "https://github.com/ant-design/ant-design/pull/18007",
    id: 475150255,
    node_id: "MDExOlB1bGxSZXF1ZXN0MzAyOTU4NTc0",
    number: 18007,
    title:
      "fix(documentation): :book: Add missing transitions properties for `Select`, `AutoComplete` and `TreeSelect`",
    user: {
      login: "altJake",
      id: 6689688,
      node_id: "MDQ6VXNlcjY2ODk2ODg=",
      avatar_url: "https://avatars2.githubusercontent.com/u/6689688?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/altJake",
      html_url: "https://github.com/altJake",
      followers_url: "https://api.github.com/users/altJake/followers",
      following_url:
        "https://api.github.com/users/altJake/following{/other_user}",
      gists_url: "https://api.github.com/users/altJake/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/altJake/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/altJake/subscriptions",
      organizations_url: "https://api.github.com/users/altJake/orgs",
      repos_url: "https://api.github.com/users/altJake/repos",
      events_url: "https://api.github.com/users/altJake/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/altJake/received_events",
      type: "User",
      site_admin: false
    },
    labels: [
      {
        id: 1310631527,
        node_id: "MDU6TGFiZWwxMzEwNjMxNTI3",
        url:
          "https://api.github.com/repos/ant-design/ant-design/labels/PR:%20unreviewed",
        name: "PR: unreviewed",
        color: "fbca04",
        default: false
      }
    ],
    state: "open",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 3,
    created_at: "2019-07-31T13:37:40Z",
    updated_at: "2019-08-02T08:42:08Z",
    closed_at: null,
    author_association: "NONE",
    pull_request: {
      url: "https://api.github.com/repos/ant-design/ant-design/pulls/18007",
      html_url: "https://github.com/ant-design/ant-design/pull/18007",
      diff_url: "https://github.com/ant-design/ant-design/pull/18007.diff",
      patch_url: "https://github.com/ant-design/ant-design/pull/18007.patch"
    },
    body:
      "### 🤔 This is a ...\r\n\r\n- [x] Site / document update\r\n\r\n### 💡 Background and solution\r\n\r\n ⚠️ _**PLEASE NOTICE**_ ⚠️ This PR adds missing properties documentation, but as I am not speaking Chinese I could only add it to the English documentation versions.\r\n\r\nMy team and I struggled a bit with disabling animations for rendering choices _inside_ the `Select` component in _multi/tag_ mode.\r\n\r\nAfter looking to different approaches...\r\nWe couldn't use the suggested one in #951 as the styling structure in our codebase didn't allow us to override the input's specific animation.\r\nLater we tried to set the `animation` property for the descendants of the input to `none` what lead lead to disabling the animation itself, but added a delay to the removal / addition of new choices to the input - causes a very weird \"laggy\" feeling.\r\n\r\nSlightly further into the investigation we found that the underlying `rc-select` component is the one to control the animation and it does that using the `choiceTrnaisitionName` property. Which is set defaultly to `zoom` by ant-design's `Select`, `AutoComplete` and `TreeSelect` components.\r\n\r\nOverriding the default value with an empty string turned out to work perfectly without css manipulation and I suppose there are more people out there that didn't know that these components expose this property when using it as **it is not listed in the API table** for the components in the website.\r\n\r\nThis PR adds the `choiceTransitionName` and `transitionName` supported by the underlying `rc-select` and exposed by ant-design's `Select`, `AutoComplete` and `TreeSelect` to the API properties list.\r\n\r\nHere one can see the difference, the first is with css override to `animation: none;` and the second using the property `choiceTransitionName=''`:\r\n\r\n![unanimated-select](https://user-images.githubusercontent.com/6689688/62216183-92c87880-b3a8-11e9-90d7-420d293b98ff.gif)\r\n\r\nAnd a code example in [codesandbox](https://codesandbox.io/s/gracious-leakey-bk7ce)\r\n\r\n### 📝 Changelog\r\n\r\n| Language   | Changelog |\r\n| ---------- | --------- |\r\n| 🇺🇸 English | Add missing `choiceTranitionName` and `transitionName` properites in `Select`, `AutoComplete` and `TreeSelect` documentation |\r\n| 🇨🇳 Chinese |  **_???_**     |\r\n\r\n### ☑️ Self Check before Merge\r\n\r\n- [x] Doc is updated/provided or not needed\r\n- [x] Changelog is provided or not needed\r\n\r\n\r\n-----\r\n[View rendered components/auto-complete/index.en-US.md](https://github.com/altJake/ant-design/blob/add-missing-transition-doc/components/auto-complete/index.en-US.md)\r\n[View rendered components/select/index.en-US.md](https://github.com/altJake/ant-design/blob/add-missing-transition-doc/components/select/index.en-US.md)\r\n[View rendered components/tree-select/index.en-US.md](https://github.com/altJake/ant-design/blob/add-missing-transition-doc/components/tree-select/index.en-US.md)"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/18006",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18006/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18006/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18006/events",
    html_url: "https://github.com/ant-design/ant-design/pull/18006",
    id: 475147244,
    node_id: "MDExOlB1bGxSZXF1ZXN0MzAyOTU2MTEy",
    number: 18006,
    title: "feat: added rtl direction to cascader",
    user: {
      login: "saeedrahimi",
      id: 12451743,
      node_id: "MDQ6VXNlcjEyNDUxNzQz",
      avatar_url: "https://avatars1.githubusercontent.com/u/12451743?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/saeedrahimi",
      html_url: "https://github.com/saeedrahimi",
      followers_url: "https://api.github.com/users/saeedrahimi/followers",
      following_url:
        "https://api.github.com/users/saeedrahimi/following{/other_user}",
      gists_url: "https://api.github.com/users/saeedrahimi/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/saeedrahimi/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/saeedrahimi/subscriptions",
      organizations_url: "https://api.github.com/users/saeedrahimi/orgs",
      repos_url: "https://api.github.com/users/saeedrahimi/repos",
      events_url: "https://api.github.com/users/saeedrahimi/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/saeedrahimi/received_events",
      type: "User",
      site_admin: false
    },
    labels: [
      {
        id: 1310631527,
        node_id: "MDU6TGFiZWwxMzEwNjMxNTI3",
        url:
          "https://api.github.com/repos/ant-design/ant-design/labels/PR:%20unreviewed",
        name: "PR: unreviewed",
        color: "fbca04",
        default: false
      }
    ],
    state: "open",
    locked: false,
    assignee: {
      login: "zombieJ",
      id: 5378891,
      node_id: "MDQ6VXNlcjUzNzg4OTE=",
      avatar_url: "https://avatars1.githubusercontent.com/u/5378891?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/zombieJ",
      html_url: "https://github.com/zombieJ",
      followers_url: "https://api.github.com/users/zombieJ/followers",
      following_url:
        "https://api.github.com/users/zombieJ/following{/other_user}",
      gists_url: "https://api.github.com/users/zombieJ/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/zombieJ/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/zombieJ/subscriptions",
      organizations_url: "https://api.github.com/users/zombieJ/orgs",
      repos_url: "https://api.github.com/users/zombieJ/repos",
      events_url: "https://api.github.com/users/zombieJ/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/zombieJ/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "zombieJ",
        id: 5378891,
        node_id: "MDQ6VXNlcjUzNzg4OTE=",
        avatar_url: "https://avatars1.githubusercontent.com/u/5378891?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/zombieJ",
        html_url: "https://github.com/zombieJ",
        followers_url: "https://api.github.com/users/zombieJ/followers",
        following_url:
          "https://api.github.com/users/zombieJ/following{/other_user}",
        gists_url: "https://api.github.com/users/zombieJ/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/zombieJ/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/zombieJ/subscriptions",
        organizations_url: "https://api.github.com/users/zombieJ/orgs",
        repos_url: "https://api.github.com/users/zombieJ/repos",
        events_url: "https://api.github.com/users/zombieJ/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/zombieJ/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 4,
    created_at: "2019-07-31T13:31:49Z",
    updated_at: "2019-08-03T14:33:29Z",
    closed_at: null,
    author_association: "NONE",
    pull_request: {
      url: "https://api.github.com/repos/ant-design/ant-design/pulls/18006",
      html_url: "https://github.com/ant-design/ant-design/pull/18006",
      diff_url: "https://github.com/ant-design/ant-design/pull/18006.diff",
      patch_url: "https://github.com/ant-design/ant-design/pull/18006.patch"
    },
    body:
      "<!--\r\nFirst of all, thank you for your contribution! 😄\r\n\r\nNew feature please send pull request to feature branch, and rest to master branch.\r\nPull request will be merged after one of collaborators approve.\r\nPlease makes sure that these form are filled before submitting your pull request, thank you!\r\n\r\n[[中文版模板 / Chinese template](https://github.com/ant-design/ant-design/blob/master/.github/PULL_REQUEST_TEMPLATE/pr_cn.md)]\r\n-->\r\n\r\n### 🤔 This is a ...\r\n\r\n- [x] New feature\r\n- [x] Bug fix\r\n- [x] Site / document update\r\n- [x] Component style update\r\n- [ ] TypeScript definition update\r\n- [ ] Refactoring\r\n- [ ] Code style optimization\r\n- [ ] Test Case\r\n- [ ] Branch merge\r\n- [ ] Other (about what?)\r\n\r\n### 🔗 Related issue link\r\n[#4051](https://github.com/ant-design/ant-design/issues/4051)\r\n\r\n\r\n### 💡 Background and solution\r\nAs requirement of this [issue](https://github.com/ant-design/ant-design/issues/4051) components of ant-design doesn't support right to left direction, and those components are not useful in some languages like Persian(Farsi) or Arabic.\r\n\r\nSolution: \r\nI started to develop Rtl style on ant-design and as @zombieJ  mentioned in issue i used ConfigProvider to set direction of component.\r\n\r\nlayoutDirection property added to ConfigProvider.\r\n```\r\n<ConfigProvider layoutDirection=\"rtl\">\r\n      <Cascader  options={options} placeholder=\"select an item\"/>\r\n</ConfigProvider>\r\n```\r\nin style files added rtl based styles to change direction of displayed items\r\n```\r\n&-picker-small &-picker-clear,\r\n  &-picker-small &-picker-arrow {\r\n    right: @control-padding-horizontal-sm;\r\n    [dir='rtl'] &, .rtl & {\r\n      right: auto;\r\n      left: @control-padding-horizontal;\r\n    }\r\n  }\r\n```\r\nso when one of parent elements has dir=['rtl'] (provided by ConfigProvider) paddings , margins, floats and other properties flipped to display correctly in right-to-left directions.\r\n\r\n![cascader](https://user-images.githubusercontent.com/12451743/62215987-2dcb4d80-b3bd-11e9-9bc2-42b45a1cdad6.JPG)\r\n\r\n### 📝 Changelog\r\n\r\n| Language   | Changelog |\r\n| ---------- | --------- |\r\n| 🇺🇸 English |   Added Rtl direction on cascader        |\r\n| 🇨🇳 Chinese |           |\r\n\r\n### ☑️ Self Check before Merge\r\n\r\n- [ ] Doc is updated/provided or not needed\r\n- [x] Demo is updated/provided or not needed\r\n- [ ] TypeScript definition is updated/provided or not needed\r\n- [ ] Changelog is provided or not needed\r\n\r\n\r\n-----\r\n[View rendered components/cascader/demo/right-to-left.md](https://github.com/saeedrahimi/ant-design/blob/cascader-rtl/components/cascader/demo/right-to-left.md)"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/18004",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18004/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18004/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18004/events",
    html_url: "https://github.com/ant-design/ant-design/issues/18004",
    id: 475085331,
    node_id: "MDU6SXNzdWU0NzUwODUzMzE=",
    number: 18004,
    title:
      "Treeselect treedata in the dropdown menu cannot send request after filtering input values ",
    user: {
      login: "se7en00",
      id: 1452533,
      node_id: "MDQ6VXNlcjE0NTI1MzM=",
      avatar_url: "https://avatars2.githubusercontent.com/u/1452533?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/se7en00",
      html_url: "https://github.com/se7en00",
      followers_url: "https://api.github.com/users/se7en00/followers",
      following_url:
        "https://api.github.com/users/se7en00/following{/other_user}",
      gists_url: "https://api.github.com/users/se7en00/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/se7en00/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/se7en00/subscriptions",
      organizations_url: "https://api.github.com/users/se7en00/orgs",
      repos_url: "https://api.github.com/users/se7en00/repos",
      events_url: "https://api.github.com/users/se7en00/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/se7en00/received_events",
      type: "User",
      site_admin: false
    },
    labels: [],
    state: "open",
    locked: false,
    assignee: {
      login: "zombieJ",
      id: 5378891,
      node_id: "MDQ6VXNlcjUzNzg4OTE=",
      avatar_url: "https://avatars1.githubusercontent.com/u/5378891?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/zombieJ",
      html_url: "https://github.com/zombieJ",
      followers_url: "https://api.github.com/users/zombieJ/followers",
      following_url:
        "https://api.github.com/users/zombieJ/following{/other_user}",
      gists_url: "https://api.github.com/users/zombieJ/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/zombieJ/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/zombieJ/subscriptions",
      organizations_url: "https://api.github.com/users/zombieJ/orgs",
      repos_url: "https://api.github.com/users/zombieJ/repos",
      events_url: "https://api.github.com/users/zombieJ/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/zombieJ/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "zombieJ",
        id: 5378891,
        node_id: "MDQ6VXNlcjUzNzg4OTE=",
        avatar_url: "https://avatars1.githubusercontent.com/u/5378891?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/zombieJ",
        html_url: "https://github.com/zombieJ",
        followers_url: "https://api.github.com/users/zombieJ/followers",
        following_url:
          "https://api.github.com/users/zombieJ/following{/other_user}",
        gists_url: "https://api.github.com/users/zombieJ/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/zombieJ/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/zombieJ/subscriptions",
        organizations_url: "https://api.github.com/users/zombieJ/orgs",
        repos_url: "https://api.github.com/users/zombieJ/repos",
        events_url: "https://api.github.com/users/zombieJ/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/zombieJ/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 0,
    created_at: "2019-07-31T11:20:39Z",
    updated_at: "2019-07-31T11:21:38Z",
    closed_at: null,
    author_association: "NONE",
    body:
      "- [x] I have searched the [issues](https://github.com/ant-design/ant-design/issues) of this repository and believe that this is not a duplicate.\r\n\r\n### Reproduction link\r\n[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/condescending-haibt-pupzk)\r\n\r\n### Steps to reproduce\r\ninput value in the treeselect\r\n\r\n\r\n### What is expected?\r\nthe filtered treedata can be clicked, and sent async request\r\n\r\n### What is actually happening?\r\ncan not be clicked\r\n\r\n| Environment | Info |\r\n|---|---|\r\n| antd | 3.20.7 |\r\n| React | react |\r\n| System | windows, mac |\r\n| Browser | chrome |\r\n\r\n\r\n<!-- generated by ant-design-issue-helper. DO NOT REMOVE -->"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/18002",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18002/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18002/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18002/events",
    html_url: "https://github.com/ant-design/ant-design/issues/18002",
    id: 475068990,
    node_id: "MDU6SXNzdWU0NzUwNjg5OTA=",
    number: 18002,
    title: "Support pika dev",
    user: {
      login: "afc163",
      id: 507615,
      node_id: "MDQ6VXNlcjUwNzYxNQ==",
      avatar_url: "https://avatars1.githubusercontent.com/u/507615?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/afc163",
      html_url: "https://github.com/afc163",
      followers_url: "https://api.github.com/users/afc163/followers",
      following_url:
        "https://api.github.com/users/afc163/following{/other_user}",
      gists_url: "https://api.github.com/users/afc163/gists{/gist_id}",
      starred_url: "https://api.github.com/users/afc163/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/afc163/subscriptions",
      organizations_url: "https://api.github.com/users/afc163/orgs",
      repos_url: "https://api.github.com/users/afc163/repos",
      events_url: "https://api.github.com/users/afc163/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/afc163/received_events",
      type: "User",
      site_admin: false
    },
    labels: [
      {
        id: 459763377,
        node_id: "MDU6TGFiZWw0NTk3NjMzNzc=",
        url:
          "https://api.github.com/repos/ant-design/ant-design/labels/help%20wanted",
        name: "help wanted",
        color: "0e8a16",
        default: true
      },
      {
        id: 222673731,
        node_id: "MDU6TGFiZWwyMjI2NzM3MzE=",
        url:
          "https://api.github.com/repos/ant-design/ant-design/labels/%F0%9F%97%A3%20Discussion",
        name: "🗣 Discussion",
        color: "ebf265",
        default: false
      }
    ],
    state: "open",
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 1,
    created_at: "2019-07-31T10:41:22Z",
    updated_at: "2019-08-04T09:19:14Z",
    closed_at: null,
    author_association: "MEMBER",
    body:
      "- https://www.pika.dev/blog/pika-web-a-future-without-webpack/\r\n- https://www.pika.dev/\r\n- https://www.pika.dev/packages/antd#releases\r\n- https://www.pika.dev/cdn\r\n- https://github.com/yiminghe/css-animation/commit/d77899fd77075b355893be6630deadaa20c7d08c\r\n\r\n---\r\n\r\nTODO:\r\n\r\n- [ ] pack to pika cdn via `@pika/pack`\r\n- [ ] documentation about how to use antd in `@pika/web`"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/18000",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18000/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18000/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/18000/events",
    html_url: "https://github.com/ant-design/ant-design/issues/18000",
    id: 475045302,
    node_id: "MDU6SXNzdWU0NzUwNDUzMDI=",
    number: 18000,
    title: "Tree，TreeSelect 异步加载数据后，一些设置项失效",
    user: {
      login: "kxcy001123",
      id: 21260618,
      node_id: "MDQ6VXNlcjIxMjYwNjE4",
      avatar_url: "https://avatars2.githubusercontent.com/u/21260618?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/kxcy001123",
      html_url: "https://github.com/kxcy001123",
      followers_url: "https://api.github.com/users/kxcy001123/followers",
      following_url:
        "https://api.github.com/users/kxcy001123/following{/other_user}",
      gists_url: "https://api.github.com/users/kxcy001123/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/kxcy001123/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/kxcy001123/subscriptions",
      organizations_url: "https://api.github.com/users/kxcy001123/orgs",
      repos_url: "https://api.github.com/users/kxcy001123/repos",
      events_url: "https://api.github.com/users/kxcy001123/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/kxcy001123/received_events",
      type: "User",
      site_admin: false
    },
    labels: [],
    state: "open",
    locked: false,
    assignee: {
      login: "afc163",
      id: 507615,
      node_id: "MDQ6VXNlcjUwNzYxNQ==",
      avatar_url: "https://avatars1.githubusercontent.com/u/507615?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/afc163",
      html_url: "https://github.com/afc163",
      followers_url: "https://api.github.com/users/afc163/followers",
      following_url:
        "https://api.github.com/users/afc163/following{/other_user}",
      gists_url: "https://api.github.com/users/afc163/gists{/gist_id}",
      starred_url: "https://api.github.com/users/afc163/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/afc163/subscriptions",
      organizations_url: "https://api.github.com/users/afc163/orgs",
      repos_url: "https://api.github.com/users/afc163/repos",
      events_url: "https://api.github.com/users/afc163/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/afc163/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "afc163",
        id: 507615,
        node_id: "MDQ6VXNlcjUwNzYxNQ==",
        avatar_url: "https://avatars1.githubusercontent.com/u/507615?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/afc163",
        html_url: "https://github.com/afc163",
        followers_url: "https://api.github.com/users/afc163/followers",
        following_url:
          "https://api.github.com/users/afc163/following{/other_user}",
        gists_url: "https://api.github.com/users/afc163/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/afc163/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/afc163/subscriptions",
        organizations_url: "https://api.github.com/users/afc163/orgs",
        repos_url: "https://api.github.com/users/afc163/repos",
        events_url: "https://api.github.com/users/afc163/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/afc163/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 0,
    created_at: "2019-07-31T09:49:28Z",
    updated_at: "2019-07-31T09:49:44Z",
    closed_at: null,
    author_association: "NONE",
    body:
      "- [x] I have searched the [issues](https://github.com/ant-design/ant-design/issues) of this repository and believe that this is not a duplicate.\r\n\r\n### Reproduction link\r\n[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/focused-murdock-y10k4)\r\n\r\n### Steps to reproduce\r\n1. 初始时  `Expand to load` 不可选择\r\n2. 点击   `Expand to load`  异步加载子节点后\r\n3. `Expand to load` 变成了可点击\r\n\r\n### What is expected?\r\n1. 初始时  `Expand to load` 不可选择\r\n2. 点击   `Expand to load`  异步加载子节点后\r\n3. `Expand to load` 仍不可可点击\r\n\r\n### What is actually happening?\r\nTree，TreeSelect 异步加载数据后，一些设置项失效\r\n\r\n| Environment | Info |\r\n|---|---|\r\n| antd | 3.20.7 |\r\n| React | 16.8.4 |\r\n| System | mac |\r\n| Browser | chrome 75.0.3770.100 |\r\n\r\n\r\n<!-- generated by ant-design-issue-helper. DO NOT REMOVE -->"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/17994",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17994/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17994/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17994/events",
    html_url: "https://github.com/ant-design/ant-design/pull/17994",
    id: 474972762,
    node_id: "MDExOlB1bGxSZXF1ZXN0MzAyODE1NzM0",
    number: 17994,
    title: "feat: steps component support type navigation",
    user: {
      login: "yutingzhao1991",
      id: 1061968,
      node_id: "MDQ6VXNlcjEwNjE5Njg=",
      avatar_url: "https://avatars0.githubusercontent.com/u/1061968?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/yutingzhao1991",
      html_url: "https://github.com/yutingzhao1991",
      followers_url: "https://api.github.com/users/yutingzhao1991/followers",
      following_url:
        "https://api.github.com/users/yutingzhao1991/following{/other_user}",
      gists_url: "https://api.github.com/users/yutingzhao1991/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/yutingzhao1991/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/yutingzhao1991/subscriptions",
      organizations_url: "https://api.github.com/users/yutingzhao1991/orgs",
      repos_url: "https://api.github.com/users/yutingzhao1991/repos",
      events_url:
        "https://api.github.com/users/yutingzhao1991/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/yutingzhao1991/received_events",
      type: "User",
      site_admin: false
    },
    labels: [
      {
        id: 1310631527,
        node_id: "MDU6TGFiZWwxMzEwNjMxNTI3",
        url:
          "https://api.github.com/repos/ant-design/ant-design/labels/PR:%20unreviewed",
        name: "PR: unreviewed",
        color: "fbca04",
        default: false
      }
    ],
    state: "open",
    locked: false,
    assignee: {
      login: "zombieJ",
      id: 5378891,
      node_id: "MDQ6VXNlcjUzNzg4OTE=",
      avatar_url: "https://avatars1.githubusercontent.com/u/5378891?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/zombieJ",
      html_url: "https://github.com/zombieJ",
      followers_url: "https://api.github.com/users/zombieJ/followers",
      following_url:
        "https://api.github.com/users/zombieJ/following{/other_user}",
      gists_url: "https://api.github.com/users/zombieJ/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/zombieJ/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/zombieJ/subscriptions",
      organizations_url: "https://api.github.com/users/zombieJ/orgs",
      repos_url: "https://api.github.com/users/zombieJ/repos",
      events_url: "https://api.github.com/users/zombieJ/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/zombieJ/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "zombieJ",
        id: 5378891,
        node_id: "MDQ6VXNlcjUzNzg4OTE=",
        avatar_url: "https://avatars1.githubusercontent.com/u/5378891?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/zombieJ",
        html_url: "https://github.com/zombieJ",
        followers_url: "https://api.github.com/users/zombieJ/followers",
        following_url:
          "https://api.github.com/users/zombieJ/following{/other_user}",
        gists_url: "https://api.github.com/users/zombieJ/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/zombieJ/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/zombieJ/subscriptions",
        organizations_url: "https://api.github.com/users/zombieJ/orgs",
        repos_url: "https://api.github.com/users/zombieJ/repos",
        events_url: "https://api.github.com/users/zombieJ/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/zombieJ/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 13,
    created_at: "2019-07-31T07:05:12Z",
    updated_at: "2019-08-04T07:09:58Z",
    closed_at: null,
    author_association: "CONTRIBUTOR",
    pull_request: {
      url: "https://api.github.com/repos/ant-design/ant-design/pulls/17994",
      html_url: "https://github.com/ant-design/ant-design/pull/17994",
      diff_url: "https://github.com/ant-design/ant-design/pull/17994.diff",
      patch_url: "https://github.com/ant-design/ant-design/pull/17994.patch"
    },
    body:
      "### 🤔 This is a ...\r\n\r\n- [x] New feature\r\n- [ ] Bug fix\r\n- [ ] Site / document update\r\n- [ ] Component style update\r\n- [ ] TypeScript definition update\r\n- [ ] Refactoring\r\n- [ ] Code style optimization\r\n- [ ] Test Case\r\n- [ ] Branch merge\r\n- [ ] Other (about what?)\r\n\r\n### 🔗 Related issue link\r\n\r\nhttps://github.com/ant-design/ant-design/issues/17814\r\n\r\n### 💡 Background and solution\r\n\r\nadd type to support new style:\r\n\r\n![image](https://user-images.githubusercontent.com/1061968/62190607-58f57300-b3a4-11e9-8701-55e32243a22d.png)\r\n\r\n\r\n### 📝 Changelog\r\n\r\n\r\n| Language   | Changelog |\r\n| ---------- | --------- |\r\n| 🇺🇸 English |     Step support `type` prop to set `navigation` for new style     |\r\n| 🇨🇳 Chinese |    Step 支持 `type` 属性设置为 `navigation` 来支持新的导航步骤条样式      |\r\n\r\n### ☑️ Self Check before Merge\r\n\r\n- [x] Doc is updated/provided or not needed\r\n- [x] Demo is updated/provided or not needed\r\n- [x] TypeScript definition is updated/provided or not needed\r\n- [x] Changelog is provided or not needed\r\n- [x] wait for https://github.com/react-component/steps/pull/75\r\n\r\n-----\r\n[View rendered components/steps/demo/nav.md](https://github.com/ant-design/ant-design/blob/feat/step/components/steps/demo/nav.md)\r\n[View rendered components/steps/index.en-US.md](https://github.com/ant-design/ant-design/blob/feat/step/components/steps/index.en-US.md)\r\n[View rendered components/steps/index.zh-CN.md](https://github.com/ant-design/ant-design/blob/feat/step/components/steps/index.zh-CN.md)"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/17991",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17991/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17991/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17991/events",
    html_url: "https://github.com/ant-design/ant-design/issues/17991",
    id: 474950416,
    node_id: "MDU6SXNzdWU0NzQ5NTA0MTY=",
    number: 17991,
    title: "Modal的Header和Footer，Less主题定制变量是否能提供更细节化一点？",
    user: {
      login: "wuchu",
      id: 1997168,
      node_id: "MDQ6VXNlcjE5OTcxNjg=",
      avatar_url: "https://avatars3.githubusercontent.com/u/1997168?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/wuchu",
      html_url: "https://github.com/wuchu",
      followers_url: "https://api.github.com/users/wuchu/followers",
      following_url:
        "https://api.github.com/users/wuchu/following{/other_user}",
      gists_url: "https://api.github.com/users/wuchu/gists{/gist_id}",
      starred_url: "https://api.github.com/users/wuchu/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/wuchu/subscriptions",
      organizations_url: "https://api.github.com/users/wuchu/orgs",
      repos_url: "https://api.github.com/users/wuchu/repos",
      events_url: "https://api.github.com/users/wuchu/events{/privacy}",
      received_events_url: "https://api.github.com/users/wuchu/received_events",
      type: "User",
      site_admin: false
    },
    labels: [],
    state: "open",
    locked: false,
    assignee: {
      login: "yesmeck",
      id: 465125,
      node_id: "MDQ6VXNlcjQ2NTEyNQ==",
      avatar_url: "https://avatars0.githubusercontent.com/u/465125?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/yesmeck",
      html_url: "https://github.com/yesmeck",
      followers_url: "https://api.github.com/users/yesmeck/followers",
      following_url:
        "https://api.github.com/users/yesmeck/following{/other_user}",
      gists_url: "https://api.github.com/users/yesmeck/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/yesmeck/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/yesmeck/subscriptions",
      organizations_url: "https://api.github.com/users/yesmeck/orgs",
      repos_url: "https://api.github.com/users/yesmeck/repos",
      events_url: "https://api.github.com/users/yesmeck/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/yesmeck/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "yesmeck",
        id: 465125,
        node_id: "MDQ6VXNlcjQ2NTEyNQ==",
        avatar_url: "https://avatars0.githubusercontent.com/u/465125?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/yesmeck",
        html_url: "https://github.com/yesmeck",
        followers_url: "https://api.github.com/users/yesmeck/followers",
        following_url:
          "https://api.github.com/users/yesmeck/following{/other_user}",
        gists_url: "https://api.github.com/users/yesmeck/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/yesmeck/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/yesmeck/subscriptions",
        organizations_url: "https://api.github.com/users/yesmeck/orgs",
        repos_url: "https://api.github.com/users/yesmeck/repos",
        events_url: "https://api.github.com/users/yesmeck/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/yesmeck/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 0,
    created_at: "2019-07-31T05:56:51Z",
    updated_at: "2019-07-31T05:56:52Z",
    closed_at: null,
    author_association: "NONE",
    body:
      "- [ ] I have searched the [issues](https://github.com/ant-design/ant-design/issues) of this repository and believe that this is not a duplicate.\r\n\r\n### What problem does this feature solve?\r\nModal定制化主题Less变量，改不了头部的padding以及close按钮的大小等等，自带提供的theme定制太过简单😐：\r\n\r\n```less\r\n// Modal\r\n// --\r\n@modal-body-padding: 24px;\r\n@modal-header-bg: @component-background;\r\n@modal-footer-bg: transparent;\r\n@modal-mask-bg: fade(@black, 65%);\r\n```\r\n\r\n### What does the proposed API look like?\r\n改变padding值\r\n```less\r\n@modal-header-padding-vertical\r\n@modal-header-padding-horizontal\r\n@modal-footer-padding-vertical\r\n@modal-footer-padding-horizontal\r\n@modal-body-padding-vertical\r\n@modal-body-padding-horizontal\r\n```\r\n\r\n改变close大小\r\n```\r\n@modal-close-x-size // 假如能暴露额外属性能调整边距最好了，不过源码宽高好像也是写死的...\r\n```\r\n\r\n改变高度\r\n```\r\n@modal-title-height or @modal-title-line-height\r\n```\r\n\r\n改变分割线样式或者宽度\r\n```\r\n@modal-header-border-xxx\r\n@modal-footer-border-xxx\r\n```\r\n\r\nand, 其它组件细节定制，比如调整默认两个button顺序（UI设计妹子惹不起的），希望通过组件属性控制，而不是非要自己定制写一个Footer组件\r\n\r\n\r\n<!-- generated by ant-design-issue-helper. DO NOT REMOVE -->"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/17987",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17987/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17987/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17987/events",
    html_url: "https://github.com/ant-design/ant-design/issues/17987",
    id: 474905423,
    node_id: "MDU6SXNzdWU0NzQ5MDU0MjM=",
    number: 17987,
    title: "Badge with icon is error when testing by storybook.",
    user: {
      login: "caothuphu2013",
      id: 30824675,
      node_id: "MDQ6VXNlcjMwODI0Njc1",
      avatar_url: "https://avatars2.githubusercontent.com/u/30824675?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/caothuphu2013",
      html_url: "https://github.com/caothuphu2013",
      followers_url: "https://api.github.com/users/caothuphu2013/followers",
      following_url:
        "https://api.github.com/users/caothuphu2013/following{/other_user}",
      gists_url: "https://api.github.com/users/caothuphu2013/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/caothuphu2013/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/caothuphu2013/subscriptions",
      organizations_url: "https://api.github.com/users/caothuphu2013/orgs",
      repos_url: "https://api.github.com/users/caothuphu2013/repos",
      events_url: "https://api.github.com/users/caothuphu2013/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/caothuphu2013/received_events",
      type: "User",
      site_admin: false
    },
    labels: [
      {
        id: 340842022,
        node_id: "MDU6TGFiZWwzNDA4NDIwMjI=",
        url:
          "https://api.github.com/repos/ant-design/ant-design/labels/%F0%9F%A4%94%20Need%20Reproduce",
        name: "🤔 Need Reproduce",
        color: "fef2c0",
        default: false
      }
    ],
    state: "open",
    locked: false,
    assignee: {
      login: "chenshuai2144",
      id: 8186664,
      node_id: "MDQ6VXNlcjgxODY2NjQ=",
      avatar_url: "https://avatars0.githubusercontent.com/u/8186664?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/chenshuai2144",
      html_url: "https://github.com/chenshuai2144",
      followers_url: "https://api.github.com/users/chenshuai2144/followers",
      following_url:
        "https://api.github.com/users/chenshuai2144/following{/other_user}",
      gists_url: "https://api.github.com/users/chenshuai2144/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/chenshuai2144/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/chenshuai2144/subscriptions",
      organizations_url: "https://api.github.com/users/chenshuai2144/orgs",
      repos_url: "https://api.github.com/users/chenshuai2144/repos",
      events_url: "https://api.github.com/users/chenshuai2144/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/chenshuai2144/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "chenshuai2144",
        id: 8186664,
        node_id: "MDQ6VXNlcjgxODY2NjQ=",
        avatar_url: "https://avatars0.githubusercontent.com/u/8186664?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/chenshuai2144",
        html_url: "https://github.com/chenshuai2144",
        followers_url: "https://api.github.com/users/chenshuai2144/followers",
        following_url:
          "https://api.github.com/users/chenshuai2144/following{/other_user}",
        gists_url: "https://api.github.com/users/chenshuai2144/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/chenshuai2144/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/chenshuai2144/subscriptions",
        organizations_url: "https://api.github.com/users/chenshuai2144/orgs",
        repos_url: "https://api.github.com/users/chenshuai2144/repos",
        events_url:
          "https://api.github.com/users/chenshuai2144/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/chenshuai2144/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 1,
    created_at: "2019-07-31T02:34:27Z",
    updated_at: "2019-07-31T03:04:46Z",
    closed_at: null,
    author_association: "NONE",
    body:
      '- [ ] I have searched the [issues](https://github.com/ant-design/ant-design/issues) of this repository and believe that this is not a duplicate.\r\n<img width="854" alt="Screen Shot 2019-07-30 at 5 36 30 PM" src="https://user-images.githubusercontent.com/30824675/62179322-58de7e80-b376-11e9-8433-71bbf792447d.png">\r\n<img width="561" alt="Screen Shot 2019-07-30 at 5 36 41 PM" src="https://user-images.githubusercontent.com/30824675/62179329-5c720580-b376-11e9-8973-443da88b4788.png">\r\n\r\n\r\n### Reproduction link\r\n[https://github.com/ant-design/ant-design/issues/17984](https://github.com/ant-design/ant-design/issues/17984)\r\n\r\n### Steps to reproduce\r\n storiesOf(\'Badge\', module)\r\n  .addDecorator(withInfo)\r\n  .addParameters({\r\n    info: {\r\n      inline: true\r\n    }\r\n  })\r\n  .add(\'Icon Badge\', () => (\r\n    <Badge dot>\r\n      <Icon type="notification" style={{fontSize: \'3rem\'}}/>\r\n    </Badge>\r\n  ))\r\n\r\n### What is expected?\r\nTest is success\r\n\r\n### What is actually happening?\r\nTest fail \r\n\r\n| Environment | Info |\r\n|---|---|\r\n| antd | 4.0.0-alpha.0 |\r\n| React | 16.8.6 |\r\n| System | MacOS |\r\n| Browser | Chrome |\r\n\r\n\r\n<!-- generated by ant-design-issue-helper. DO NOT REMOVE -->'
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/17979",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17979/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17979/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17979/events",
    html_url: "https://github.com/ant-design/ant-design/issues/17979",
    id: 474464860,
    node_id: "MDU6SXNzdWU0NzQ0NjQ4NjA=",
    number: 17979,
    title:
      "TreeSelect treeData reload, already loaded treeNode expand icon disappear  ",
    user: {
      login: "murphywuwu",
      id: 12481194,
      node_id: "MDQ6VXNlcjEyNDgxMTk0",
      avatar_url: "https://avatars2.githubusercontent.com/u/12481194?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/murphywuwu",
      html_url: "https://github.com/murphywuwu",
      followers_url: "https://api.github.com/users/murphywuwu/followers",
      following_url:
        "https://api.github.com/users/murphywuwu/following{/other_user}",
      gists_url: "https://api.github.com/users/murphywuwu/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/murphywuwu/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/murphywuwu/subscriptions",
      organizations_url: "https://api.github.com/users/murphywuwu/orgs",
      repos_url: "https://api.github.com/users/murphywuwu/repos",
      events_url: "https://api.github.com/users/murphywuwu/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/murphywuwu/received_events",
      type: "User",
      site_admin: false
    },
    labels: [
      {
        id: 203750412,
        node_id: "MDU6TGFiZWwyMDM3NTA0MTI=",
        url:
          "https://api.github.com/repos/ant-design/ant-design/labels/%F0%9F%90%9B%20Bug",
        name: "🐛 Bug",
        color: "fc2929",
        default: false
      }
    ],
    state: "open",
    locked: false,
    assignee: {
      login: "zombieJ",
      id: 5378891,
      node_id: "MDQ6VXNlcjUzNzg4OTE=",
      avatar_url: "https://avatars1.githubusercontent.com/u/5378891?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/zombieJ",
      html_url: "https://github.com/zombieJ",
      followers_url: "https://api.github.com/users/zombieJ/followers",
      following_url:
        "https://api.github.com/users/zombieJ/following{/other_user}",
      gists_url: "https://api.github.com/users/zombieJ/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/zombieJ/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/zombieJ/subscriptions",
      organizations_url: "https://api.github.com/users/zombieJ/orgs",
      repos_url: "https://api.github.com/users/zombieJ/repos",
      events_url: "https://api.github.com/users/zombieJ/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/zombieJ/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "zombieJ",
        id: 5378891,
        node_id: "MDQ6VXNlcjUzNzg4OTE=",
        avatar_url: "https://avatars1.githubusercontent.com/u/5378891?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/zombieJ",
        html_url: "https://github.com/zombieJ",
        followers_url: "https://api.github.com/users/zombieJ/followers",
        following_url:
          "https://api.github.com/users/zombieJ/following{/other_user}",
        gists_url: "https://api.github.com/users/zombieJ/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/zombieJ/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/zombieJ/subscriptions",
        organizations_url: "https://api.github.com/users/zombieJ/orgs",
        repos_url: "https://api.github.com/users/zombieJ/repos",
        events_url: "https://api.github.com/users/zombieJ/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/zombieJ/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 0,
    created_at: "2019-07-30T09:08:21Z",
    updated_at: "2019-07-31T03:33:19Z",
    closed_at: null,
    author_association: "NONE",
    body:
      "- [x] I have searched the [issues](https://github.com/ant-design/ant-design/issues) of this repository and believe that this is not a duplicate.\r\n\r\n### Reproduction link\r\n[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/withered-monad-hfc0b)\r\n\r\n### Steps to reproduce\r\n展开一个节点后， 点击重新加载按钮， 节点前面的展开按钮消失\r\n\r\n### What is expected?\r\ntreeNode expand icon exist\r\n\r\n### What is actually happening?\r\ntreeNode expand icon disappear\r\n\r\n| Environment | Info |\r\n|---|---|\r\n| antd | 3.16.3 |\r\n| React | 16.8.6 |\r\n| System | masOS Mojave 10.14 |\r\n| Browser | chrome 75.0.3770.142 |\r\n\r\n---\r\nrelated issue: https://github.com/ant-design/ant-design/issues/10821\r\n\r\n\r\n<!-- generated by ant-design-issue-helper. DO NOT REMOVE -->"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/17975",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17975/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17975/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17975/events",
    html_url: "https://github.com/ant-design/ant-design/issues/17975",
    id: 474398819,
    node_id: "MDU6SXNzdWU0NzQzOTg4MTk=",
    number: 17975,
    title:
      "在 Typography.Paragraph 自动溢出省略中，能修改展开按钮的样式吗？我想做成像Dropdown 这样的下拉效果, 或者Dropdown 能限制隐藏行数吗",
    user: {
      login: "wzht1991",
      id: 32288783,
      node_id: "MDQ6VXNlcjMyMjg4Nzgz",
      avatar_url: "https://avatars2.githubusercontent.com/u/32288783?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/wzht1991",
      html_url: "https://github.com/wzht1991",
      followers_url: "https://api.github.com/users/wzht1991/followers",
      following_url:
        "https://api.github.com/users/wzht1991/following{/other_user}",
      gists_url: "https://api.github.com/users/wzht1991/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/wzht1991/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/wzht1991/subscriptions",
      organizations_url: "https://api.github.com/users/wzht1991/orgs",
      repos_url: "https://api.github.com/users/wzht1991/repos",
      events_url: "https://api.github.com/users/wzht1991/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/wzht1991/received_events",
      type: "User",
      site_admin: false
    },
    labels: [
      {
        id: 570271094,
        node_id: "MDU6TGFiZWw1NzAyNzEwOTQ=",
        url:
          "https://api.github.com/repos/ant-design/ant-design/labels/%F0%9F%92%A1%20Feature%20Request",
        name: "💡 Feature Request",
        color: "c13463",
        default: false
      }
    ],
    state: "open",
    locked: false,
    assignee: {
      login: "chenshuai2144",
      id: 8186664,
      node_id: "MDQ6VXNlcjgxODY2NjQ=",
      avatar_url: "https://avatars0.githubusercontent.com/u/8186664?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/chenshuai2144",
      html_url: "https://github.com/chenshuai2144",
      followers_url: "https://api.github.com/users/chenshuai2144/followers",
      following_url:
        "https://api.github.com/users/chenshuai2144/following{/other_user}",
      gists_url: "https://api.github.com/users/chenshuai2144/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/chenshuai2144/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/chenshuai2144/subscriptions",
      organizations_url: "https://api.github.com/users/chenshuai2144/orgs",
      repos_url: "https://api.github.com/users/chenshuai2144/repos",
      events_url: "https://api.github.com/users/chenshuai2144/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/chenshuai2144/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "chenshuai2144",
        id: 8186664,
        node_id: "MDQ6VXNlcjgxODY2NjQ=",
        avatar_url: "https://avatars0.githubusercontent.com/u/8186664?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/chenshuai2144",
        html_url: "https://github.com/chenshuai2144",
        followers_url: "https://api.github.com/users/chenshuai2144/followers",
        following_url:
          "https://api.github.com/users/chenshuai2144/following{/other_user}",
        gists_url: "https://api.github.com/users/chenshuai2144/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/chenshuai2144/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/chenshuai2144/subscriptions",
        organizations_url: "https://api.github.com/users/chenshuai2144/orgs",
        repos_url: "https://api.github.com/users/chenshuai2144/repos",
        events_url:
          "https://api.github.com/users/chenshuai2144/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/chenshuai2144/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 3,
    created_at: "2019-07-30T06:32:08Z",
    updated_at: "2019-07-31T05:32:48Z",
    closed_at: null,
    author_association: "NONE",
    body:
      "- [x] I have searched the [issues](https://github.com/ant-design/ant-design/issues) of this repository and believe that this is not a duplicate.\r\n\r\n### What problem does this feature solve?\r\n能让我们做出更加个性化的网站\r\n\r\n### What does the proposed API look like?\r\n希望能提供一个属性来修改效果\r\n\r\n\r\n<!-- generated by ant-design-issue-helper. DO NOT REMOVE -->"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/17966",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17966/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17966/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17966/events",
    html_url: "https://github.com/ant-design/ant-design/issues/17966",
    id: 474344533,
    node_id: "MDU6SXNzdWU0NzQzNDQ1MzM=",
    number: 17966,
    title: "Timeline mode支持左右同时显示风格",
    user: {
      login: "fifsky",
      id: 280967,
      node_id: "MDQ6VXNlcjI4MDk2Nw==",
      avatar_url: "https://avatars0.githubusercontent.com/u/280967?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/fifsky",
      html_url: "https://github.com/fifsky",
      followers_url: "https://api.github.com/users/fifsky/followers",
      following_url:
        "https://api.github.com/users/fifsky/following{/other_user}",
      gists_url: "https://api.github.com/users/fifsky/gists{/gist_id}",
      starred_url: "https://api.github.com/users/fifsky/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/fifsky/subscriptions",
      organizations_url: "https://api.github.com/users/fifsky/orgs",
      repos_url: "https://api.github.com/users/fifsky/repos",
      events_url: "https://api.github.com/users/fifsky/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/fifsky/received_events",
      type: "User",
      site_admin: false
    },
    labels: [
      {
        id: 459763377,
        node_id: "MDU6TGFiZWw0NTk3NjMzNzc=",
        url:
          "https://api.github.com/repos/ant-design/ant-design/labels/help%20wanted",
        name: "help wanted",
        color: "0e8a16",
        default: true
      }
    ],
    state: "open",
    locked: false,
    assignee: {
      login: "zombieJ",
      id: 5378891,
      node_id: "MDQ6VXNlcjUzNzg4OTE=",
      avatar_url: "https://avatars1.githubusercontent.com/u/5378891?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/zombieJ",
      html_url: "https://github.com/zombieJ",
      followers_url: "https://api.github.com/users/zombieJ/followers",
      following_url:
        "https://api.github.com/users/zombieJ/following{/other_user}",
      gists_url: "https://api.github.com/users/zombieJ/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/zombieJ/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/zombieJ/subscriptions",
      organizations_url: "https://api.github.com/users/zombieJ/orgs",
      repos_url: "https://api.github.com/users/zombieJ/repos",
      events_url: "https://api.github.com/users/zombieJ/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/zombieJ/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "zombieJ",
        id: 5378891,
        node_id: "MDQ6VXNlcjUzNzg4OTE=",
        avatar_url: "https://avatars1.githubusercontent.com/u/5378891?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/zombieJ",
        html_url: "https://github.com/zombieJ",
        followers_url: "https://api.github.com/users/zombieJ/followers",
        following_url:
          "https://api.github.com/users/zombieJ/following{/other_user}",
        gists_url: "https://api.github.com/users/zombieJ/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/zombieJ/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/zombieJ/subscriptions",
        organizations_url: "https://api.github.com/users/zombieJ/orgs",
        repos_url: "https://api.github.com/users/zombieJ/repos",
        events_url: "https://api.github.com/users/zombieJ/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/zombieJ/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 4,
    created_at: "2019-07-30T02:53:03Z",
    updated_at: "2019-08-01T14:12:46Z",
    closed_at: null,
    author_association: "NONE",
    body:
      '- [x] I have searched the [issues](https://github.com/ant-design/ant-design/issues) of this repository and believe that this is not a duplicate.\r\n\r\n### What problem does this feature solve?\r\n当前的timeline mode支持 left right和左右轮替显示alternate，是否可以添加一个选项，支持在同一行左右都可以显示内容，比如左边显示时间，右边显示事件内容，比如：\r\n```\r\n2015-09-01  O  Create a services site  \r\n            |\r\n2015-09-01  O  Solve initial network problems \r\n            |\r\n2015-09-01  O  Technical testing\r\n```\r\n\r\n### What does the proposed API look like?\r\n```\r\n<Timeline>\r\n    <Timeline.Item lable="2015-09-01">Create a services site</Timeline.Item>\r\n    <Timeline.Item lable="2015-09-01">Solve initial network problems</Timeline.Item>\r\n    <Timeline.Item lable="2015-09-01">Technical testing</Timeline.Item>\r\n</Timeline>\r\n```\r\n\r\n\r\n<!-- generated by ant-design-issue-helper. DO NOT REMOVE -->'
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/17962",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17962/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17962/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17962/events",
    html_url: "https://github.com/ant-design/ant-design/issues/17962",
    id: 474212948,
    node_id: "MDU6SXNzdWU0NzQyMTI5NDg=",
    number: 17962,
    title:
      "<Icon> component does not render custom SVG well & also mentioned props for custom icon component does not work",
    user: {
      login: "vidushigupta",
      id: 5883060,
      node_id: "MDQ6VXNlcjU4ODMwNjA=",
      avatar_url: "https://avatars3.githubusercontent.com/u/5883060?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/vidushigupta",
      html_url: "https://github.com/vidushigupta",
      followers_url: "https://api.github.com/users/vidushigupta/followers",
      following_url:
        "https://api.github.com/users/vidushigupta/following{/other_user}",
      gists_url: "https://api.github.com/users/vidushigupta/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/vidushigupta/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/vidushigupta/subscriptions",
      organizations_url: "https://api.github.com/users/vidushigupta/orgs",
      repos_url: "https://api.github.com/users/vidushigupta/repos",
      events_url: "https://api.github.com/users/vidushigupta/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/vidushigupta/received_events",
      type: "User",
      site_admin: false
    },
    labels: [
      {
        id: 203750412,
        node_id: "MDU6TGFiZWwyMDM3NTA0MTI=",
        url:
          "https://api.github.com/repos/ant-design/ant-design/labels/%F0%9F%90%9B%20Bug",
        name: "🐛 Bug",
        color: "fc2929",
        default: false
      }
    ],
    state: "open",
    locked: false,
    assignee: {
      login: "zombieJ",
      id: 5378891,
      node_id: "MDQ6VXNlcjUzNzg4OTE=",
      avatar_url: "https://avatars1.githubusercontent.com/u/5378891?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/zombieJ",
      html_url: "https://github.com/zombieJ",
      followers_url: "https://api.github.com/users/zombieJ/followers",
      following_url:
        "https://api.github.com/users/zombieJ/following{/other_user}",
      gists_url: "https://api.github.com/users/zombieJ/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/zombieJ/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/zombieJ/subscriptions",
      organizations_url: "https://api.github.com/users/zombieJ/orgs",
      repos_url: "https://api.github.com/users/zombieJ/repos",
      events_url: "https://api.github.com/users/zombieJ/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/zombieJ/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "zombieJ",
        id: 5378891,
        node_id: "MDQ6VXNlcjUzNzg4OTE=",
        avatar_url: "https://avatars1.githubusercontent.com/u/5378891?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/zombieJ",
        html_url: "https://github.com/zombieJ",
        followers_url: "https://api.github.com/users/zombieJ/followers",
        following_url:
          "https://api.github.com/users/zombieJ/following{/other_user}",
        gists_url: "https://api.github.com/users/zombieJ/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/zombieJ/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/zombieJ/subscriptions",
        organizations_url: "https://api.github.com/users/zombieJ/orgs",
        repos_url: "https://api.github.com/users/zombieJ/repos",
        events_url: "https://api.github.com/users/zombieJ/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/zombieJ/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 3,
    created_at: "2019-07-29T19:17:42Z",
    updated_at: "2019-07-30T04:49:57Z",
    closed_at: null,
    author_association: "NONE",
    body:
      "- [ ] I have searched the [issues](https://github.com/ant-design/ant-design/issues) of this repository and believe that this is not a duplicate.\r\n\r\n### Reproduction link\r\n[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/antd-reproduction-template-08w2u)\r\n\r\n### Steps to reproduce\r\nPlease check the example of codesandbox.\r\nStep1 - take a custom svg icon. \r\nStep2 - render it in antD <Icon> component prop. It renders.\r\nStep3 - now use <Icon> component prop 'type'. The custom SVG does not render anymore.\r\nStep4 - Use the prop 'fill' - this does not effect the color of rendered custom SVG\r\nStep5 - Use the prop 'width'/'height' - this does not effect the width / height of rendered custom SVG\r\n\r\n### What is expected?\r\n> 'Type' prop does not override 'component' prop when used both in same time.\r\n> The props be working & customizing the rendered custom Icons dynamically\r\n\r\n### What is actually happening?\r\n> Prop 'component' is not overriding prop 'type'\r\n> The props are not replicating the effect to SVG. There is no changes in the rendered Icon.\r\n\r\n| Environment | Info |\r\n|---|---|\r\n| antd | 3.20.7 |\r\n| React | 16.8.6 |\r\n| System | MacOs Mojave |\r\n| Browser | Chrome 75.0 |\r\n\r\n---\r\nAs noticed in the code for <Icon> component in antD:-\r\n> The innerNode is getting overridden by 'type' check\r\n>  There is an 'i' element wrapping the actual SVG & the props are not propagating to actual SVG element.\r\n\r\n\r\n<!-- generated by ant-design-issue-helper. DO NOT REMOVE -->"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/17956",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17956/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17956/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17956/events",
    html_url: "https://github.com/ant-design/ant-design/issues/17956",
    id: 474071836,
    node_id: "MDU6SXNzdWU0NzQwNzE4MzY=",
    number: 17956,
    title: "tabIndex prop for Form components (i.e. Input, Select, etc.)",
    user: {
      login: "akramer24",
      id: 29418145,
      node_id: "MDQ6VXNlcjI5NDE4MTQ1",
      avatar_url: "https://avatars0.githubusercontent.com/u/29418145?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/akramer24",
      html_url: "https://github.com/akramer24",
      followers_url: "https://api.github.com/users/akramer24/followers",
      following_url:
        "https://api.github.com/users/akramer24/following{/other_user}",
      gists_url: "https://api.github.com/users/akramer24/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/akramer24/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/akramer24/subscriptions",
      organizations_url: "https://api.github.com/users/akramer24/orgs",
      repos_url: "https://api.github.com/users/akramer24/repos",
      events_url: "https://api.github.com/users/akramer24/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/akramer24/received_events",
      type: "User",
      site_admin: false
    },
    labels: [],
    state: "open",
    locked: false,
    assignee: {
      login: "afc163",
      id: 507615,
      node_id: "MDQ6VXNlcjUwNzYxNQ==",
      avatar_url: "https://avatars1.githubusercontent.com/u/507615?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/afc163",
      html_url: "https://github.com/afc163",
      followers_url: "https://api.github.com/users/afc163/followers",
      following_url:
        "https://api.github.com/users/afc163/following{/other_user}",
      gists_url: "https://api.github.com/users/afc163/gists{/gist_id}",
      starred_url: "https://api.github.com/users/afc163/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/afc163/subscriptions",
      organizations_url: "https://api.github.com/users/afc163/orgs",
      repos_url: "https://api.github.com/users/afc163/repos",
      events_url: "https://api.github.com/users/afc163/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/afc163/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "afc163",
        id: 507615,
        node_id: "MDQ6VXNlcjUwNzYxNQ==",
        avatar_url: "https://avatars1.githubusercontent.com/u/507615?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/afc163",
        html_url: "https://github.com/afc163",
        followers_url: "https://api.github.com/users/afc163/followers",
        following_url:
          "https://api.github.com/users/afc163/following{/other_user}",
        gists_url: "https://api.github.com/users/afc163/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/afc163/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/afc163/subscriptions",
        organizations_url: "https://api.github.com/users/afc163/orgs",
        repos_url: "https://api.github.com/users/afc163/repos",
        events_url: "https://api.github.com/users/afc163/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/afc163/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 0,
    created_at: "2019-07-29T14:05:56Z",
    updated_at: "2019-07-29T14:06:42Z",
    closed_at: null,
    author_association: "NONE",
    body:
      "- [x] I have searched the [issues](https://github.com/ant-design/ant-design/issues) of this repository and believe that this is not a duplicate.\r\n\r\n### What problem does this feature solve?\r\nIt would allow users to determine tab order/keep certain elements out of the tab order. I'm happy to submit a merge request if you would consider supporting this. Please let me know.\r\n\r\n### What does the proposed API look like?\r\n```js\r\n<Input {...props} tabIndex={-1} />\r\n...\r\n<Input {...props} tabIndex={3} />\r\n```\r\n\r\n\r\n<!-- generated by ant-design-issue-helper. DO NOT REMOVE -->"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/17953",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17953/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17953/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17953/events",
    html_url: "https://github.com/ant-design/ant-design/issues/17953",
    id: 474005732,
    node_id: "MDU6SXNzdWU0NzQwMDU3MzI=",
    number: 17953,
    title: 'Table Pagination - Please add "all" option to pageSizeOptions',
    user: {
      login: "eyildiz",
      id: 1090897,
      node_id: "MDQ6VXNlcjEwOTA4OTc=",
      avatar_url: "https://avatars3.githubusercontent.com/u/1090897?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/eyildiz",
      html_url: "https://github.com/eyildiz",
      followers_url: "https://api.github.com/users/eyildiz/followers",
      following_url:
        "https://api.github.com/users/eyildiz/following{/other_user}",
      gists_url: "https://api.github.com/users/eyildiz/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/eyildiz/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/eyildiz/subscriptions",
      organizations_url: "https://api.github.com/users/eyildiz/orgs",
      repos_url: "https://api.github.com/users/eyildiz/repos",
      events_url: "https://api.github.com/users/eyildiz/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/eyildiz/received_events",
      type: "User",
      site_admin: false
    },
    labels: [],
    state: "open",
    locked: false,
    assignee: {
      login: "yesmeck",
      id: 465125,
      node_id: "MDQ6VXNlcjQ2NTEyNQ==",
      avatar_url: "https://avatars0.githubusercontent.com/u/465125?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/yesmeck",
      html_url: "https://github.com/yesmeck",
      followers_url: "https://api.github.com/users/yesmeck/followers",
      following_url:
        "https://api.github.com/users/yesmeck/following{/other_user}",
      gists_url: "https://api.github.com/users/yesmeck/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/yesmeck/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/yesmeck/subscriptions",
      organizations_url: "https://api.github.com/users/yesmeck/orgs",
      repos_url: "https://api.github.com/users/yesmeck/repos",
      events_url: "https://api.github.com/users/yesmeck/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/yesmeck/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "yesmeck",
        id: 465125,
        node_id: "MDQ6VXNlcjQ2NTEyNQ==",
        avatar_url: "https://avatars0.githubusercontent.com/u/465125?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/yesmeck",
        html_url: "https://github.com/yesmeck",
        followers_url: "https://api.github.com/users/yesmeck/followers",
        following_url:
          "https://api.github.com/users/yesmeck/following{/other_user}",
        gists_url: "https://api.github.com/users/yesmeck/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/yesmeck/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/yesmeck/subscriptions",
        organizations_url: "https://api.github.com/users/yesmeck/orgs",
        repos_url: "https://api.github.com/users/yesmeck/repos",
        events_url: "https://api.github.com/users/yesmeck/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/yesmeck/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 1,
    created_at: "2019-07-29T11:47:12Z",
    updated_at: "2019-07-29T11:58:41Z",
    closed_at: null,
    author_association: "NONE",
    body:
      "- [ ] I have searched the [issues](https://github.com/ant-design/ant-design/issues) of this repository and believe that this is not a duplicate.\r\n\r\n### What problem does this feature solve?\r\nAlmost every pagination patterns includes \"all\" option. User needs all data in some circumstances such as exporting table to excel, etc. That's why we need this feature.\r\n\r\n### What does the proposed API look like?\r\nexample usage : pageSizeOptions = ['10', '20', '30', 'all']\r\n\r\n\r\n<!-- generated by ant-design-issue-helper. DO NOT REMOVE -->"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/17938",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17938/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17938/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17938/events",
    html_url: "https://github.com/ant-design/ant-design/issues/17938",
    id: 473820464,
    node_id: "MDU6SXNzdWU0NzM4MjA0NjQ=",
    number: 17938,
    title:
      "ant table will add one line sometimes    when I change dataSource  of Table",
    user: {
      login: "xinglansh",
      id: 52482492,
      node_id: "MDQ6VXNlcjUyNDgyNDky",
      avatar_url: "https://avatars1.githubusercontent.com/u/52482492?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/xinglansh",
      html_url: "https://github.com/xinglansh",
      followers_url: "https://api.github.com/users/xinglansh/followers",
      following_url:
        "https://api.github.com/users/xinglansh/following{/other_user}",
      gists_url: "https://api.github.com/users/xinglansh/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/xinglansh/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/xinglansh/subscriptions",
      organizations_url: "https://api.github.com/users/xinglansh/orgs",
      repos_url: "https://api.github.com/users/xinglansh/repos",
      events_url: "https://api.github.com/users/xinglansh/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/xinglansh/received_events",
      type: "User",
      site_admin: false
    },
    labels: [
      {
        id: 340842022,
        node_id: "MDU6TGFiZWwzNDA4NDIwMjI=",
        url:
          "https://api.github.com/repos/ant-design/ant-design/labels/%F0%9F%A4%94%20Need%20Reproduce",
        name: "🤔 Need Reproduce",
        color: "fef2c0",
        default: false
      }
    ],
    state: "open",
    locked: false,
    assignee: {
      login: "afc163",
      id: 507615,
      node_id: "MDQ6VXNlcjUwNzYxNQ==",
      avatar_url: "https://avatars1.githubusercontent.com/u/507615?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/afc163",
      html_url: "https://github.com/afc163",
      followers_url: "https://api.github.com/users/afc163/followers",
      following_url:
        "https://api.github.com/users/afc163/following{/other_user}",
      gists_url: "https://api.github.com/users/afc163/gists{/gist_id}",
      starred_url: "https://api.github.com/users/afc163/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/afc163/subscriptions",
      organizations_url: "https://api.github.com/users/afc163/orgs",
      repos_url: "https://api.github.com/users/afc163/repos",
      events_url: "https://api.github.com/users/afc163/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/afc163/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "afc163",
        id: 507615,
        node_id: "MDQ6VXNlcjUwNzYxNQ==",
        avatar_url: "https://avatars1.githubusercontent.com/u/507615?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/afc163",
        html_url: "https://github.com/afc163",
        followers_url: "https://api.github.com/users/afc163/followers",
        following_url:
          "https://api.github.com/users/afc163/following{/other_user}",
        gists_url: "https://api.github.com/users/afc163/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/afc163/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/afc163/subscriptions",
        organizations_url: "https://api.github.com/users/afc163/orgs",
        repos_url: "https://api.github.com/users/afc163/repos",
        events_url: "https://api.github.com/users/afc163/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/afc163/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 1,
    created_at: "2019-07-29T02:27:00Z",
    updated_at: "2019-07-29T05:54:28Z",
    closed_at: null,
    author_association: "NONE",
    body:
      "- [ ] I have searched the [issues](https://github.com/ant-design/ant-design/issues) of this repository and believe that this is not a duplicate.\r\n\r\n### Reproduction link\r\n[https://ant.design/components/table-cn/#Column](https://ant.design/components/table-cn/#Column)\r\n\r\n### Steps to reproduce\r\n1、I give dataSource for Table in order to render Table,\r\n2、I click some rows\r\n3、then i change  dataSource \r\n4、the Table shows extra row at first line that not in my datasource\r\n\r\n\r\n### What is expected?\r\nrender as the datasource iI given\r\n\r\n### What is actually happening?\r\nan extra line shown at the first line\r\n\r\n| Environment | Info |\r\n|---|---|\r\n| antd | 3.20.7 |\r\n| React | 16.8.6 |\r\n| System | windows10 |\r\n| Browser | chrome 71.0.3578.98 |\r\n\r\n\r\n<!-- generated by ant-design-issue-helper. DO NOT REMOVE -->"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/17923",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17923/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17923/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17923/events",
    html_url: "https://github.com/ant-design/ant-design/issues/17923",
    id: 473282074,
    node_id: "MDU6SXNzdWU0NzMyODIwNzQ=",
    number: 17923,
    title:
      "createBaseForm.js:256 Uncaught (in promise) TypeError: Cannot read property 'filter' of undefined     at Object.getRules",
    user: {
      login: "yuejie89",
      id: 36728384,
      node_id: "MDQ6VXNlcjM2NzI4Mzg0",
      avatar_url: "https://avatars1.githubusercontent.com/u/36728384?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/yuejie89",
      html_url: "https://github.com/yuejie89",
      followers_url: "https://api.github.com/users/yuejie89/followers",
      following_url:
        "https://api.github.com/users/yuejie89/following{/other_user}",
      gists_url: "https://api.github.com/users/yuejie89/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/yuejie89/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/yuejie89/subscriptions",
      organizations_url: "https://api.github.com/users/yuejie89/orgs",
      repos_url: "https://api.github.com/users/yuejie89/repos",
      events_url: "https://api.github.com/users/yuejie89/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/yuejie89/received_events",
      type: "User",
      site_admin: false
    },
    labels: [
      {
        id: 340842022,
        node_id: "MDU6TGFiZWwzNDA4NDIwMjI=",
        url:
          "https://api.github.com/repos/ant-design/ant-design/labels/%F0%9F%A4%94%20Need%20Reproduce",
        name: "🤔 Need Reproduce",
        color: "fef2c0",
        default: false
      }
    ],
    state: "open",
    locked: false,
    assignee: {
      login: "chenshuai2144",
      id: 8186664,
      node_id: "MDQ6VXNlcjgxODY2NjQ=",
      avatar_url: "https://avatars0.githubusercontent.com/u/8186664?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/chenshuai2144",
      html_url: "https://github.com/chenshuai2144",
      followers_url: "https://api.github.com/users/chenshuai2144/followers",
      following_url:
        "https://api.github.com/users/chenshuai2144/following{/other_user}",
      gists_url: "https://api.github.com/users/chenshuai2144/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/chenshuai2144/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/chenshuai2144/subscriptions",
      organizations_url: "https://api.github.com/users/chenshuai2144/orgs",
      repos_url: "https://api.github.com/users/chenshuai2144/repos",
      events_url: "https://api.github.com/users/chenshuai2144/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/chenshuai2144/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "chenshuai2144",
        id: 8186664,
        node_id: "MDQ6VXNlcjgxODY2NjQ=",
        avatar_url: "https://avatars0.githubusercontent.com/u/8186664?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/chenshuai2144",
        html_url: "https://github.com/chenshuai2144",
        followers_url: "https://api.github.com/users/chenshuai2144/followers",
        following_url:
          "https://api.github.com/users/chenshuai2144/following{/other_user}",
        gists_url: "https://api.github.com/users/chenshuai2144/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/chenshuai2144/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/chenshuai2144/subscriptions",
        organizations_url: "https://api.github.com/users/chenshuai2144/orgs",
        repos_url: "https://api.github.com/users/chenshuai2144/repos",
        events_url:
          "https://api.github.com/users/chenshuai2144/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/chenshuai2144/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 7,
    created_at: "2019-07-26T10:07:18Z",
    updated_at: "2019-07-29T05:52:54Z",
    closed_at: null,
    author_association: "NONE",
    body:
      "- [ ] I have searched the [issues](https://github.com/ant-design/ant-design/issues) of this repository and believe that this is not a duplicate.\r\n\r\n### Reproduction link\r\n[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/antd-reproduction-template-x46p6)\r\n\r\n### Steps to reproduce\r\n连接有点问题\r\n动态添加 form.getFieldValue（-个form.getFieldValue集合 包括几个字段和几个图片） 上传图片 正常    但删除一个后 再上传就报错\r\n\r\n### What is expected?\r\ncreateBaseForm.js:256 Uncaught (in promise) TypeError: Cannot read property 'filter' of undefined     at Object.getRules 解决这个报错\r\n\r\n### What is actually happening?\r\n删除一个后 再上传就报错\r\n\r\n| Environment | Info |\r\n|---|---|\r\n| antd | 3.19.1 |\r\n| React | 16.8.6 |\r\n| System | windows10 |\r\n| Browser | chrome |\r\n\r\n\r\n<!-- generated by ant-design-issue-helper. DO NOT REMOVE -->"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/17911",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17911/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17911/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17911/events",
    html_url: "https://github.com/ant-design/ant-design/issues/17911",
    id: 473164970,
    node_id: "MDU6SXNzdWU0NzMxNjQ5NzA=",
    number: 17911,
    title: "webpack4.0production模式下打包 antd组件TreeSelect报错",
    user: {
      login: "HoroXu",
      id: 23008872,
      node_id: "MDQ6VXNlcjIzMDA4ODcy",
      avatar_url: "https://avatars0.githubusercontent.com/u/23008872?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/HoroXu",
      html_url: "https://github.com/HoroXu",
      followers_url: "https://api.github.com/users/HoroXu/followers",
      following_url:
        "https://api.github.com/users/HoroXu/following{/other_user}",
      gists_url: "https://api.github.com/users/HoroXu/gists{/gist_id}",
      starred_url: "https://api.github.com/users/HoroXu/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/HoroXu/subscriptions",
      organizations_url: "https://api.github.com/users/HoroXu/orgs",
      repos_url: "https://api.github.com/users/HoroXu/repos",
      events_url: "https://api.github.com/users/HoroXu/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/HoroXu/received_events",
      type: "User",
      site_admin: false
    },
    labels: [
      {
        id: 340842022,
        node_id: "MDU6TGFiZWwzNDA4NDIwMjI=",
        url:
          "https://api.github.com/repos/ant-design/ant-design/labels/%F0%9F%A4%94%20Need%20Reproduce",
        name: "🤔 Need Reproduce",
        color: "fef2c0",
        default: false
      }
    ],
    state: "open",
    locked: false,
    assignee: {
      login: "yesmeck",
      id: 465125,
      node_id: "MDQ6VXNlcjQ2NTEyNQ==",
      avatar_url: "https://avatars0.githubusercontent.com/u/465125?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/yesmeck",
      html_url: "https://github.com/yesmeck",
      followers_url: "https://api.github.com/users/yesmeck/followers",
      following_url:
        "https://api.github.com/users/yesmeck/following{/other_user}",
      gists_url: "https://api.github.com/users/yesmeck/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/yesmeck/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/yesmeck/subscriptions",
      organizations_url: "https://api.github.com/users/yesmeck/orgs",
      repos_url: "https://api.github.com/users/yesmeck/repos",
      events_url: "https://api.github.com/users/yesmeck/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/yesmeck/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "yesmeck",
        id: 465125,
        node_id: "MDQ6VXNlcjQ2NTEyNQ==",
        avatar_url: "https://avatars0.githubusercontent.com/u/465125?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/yesmeck",
        html_url: "https://github.com/yesmeck",
        followers_url: "https://api.github.com/users/yesmeck/followers",
        following_url:
          "https://api.github.com/users/yesmeck/following{/other_user}",
        gists_url: "https://api.github.com/users/yesmeck/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/yesmeck/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/yesmeck/subscriptions",
        organizations_url: "https://api.github.com/users/yesmeck/orgs",
        repos_url: "https://api.github.com/users/yesmeck/repos",
        events_url: "https://api.github.com/users/yesmeck/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/yesmeck/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 2,
    created_at: "2019-07-26T03:54:11Z",
    updated_at: "2019-07-30T08:36:07Z",
    closed_at: null,
    author_association: "NONE",
    body:
      '- [ ] I have searched the [issues](https://github.com/ant-design/ant-design/issues) of this repository and believe that this is not a duplicate.\r\n\r\n### Reproduction link\r\n[https://ant.design/components/tree-select-cn/](https://ant.design/components/tree-select-cn/)\r\n\r\n### Steps to reproduce\r\n        <FormItem label="活动城市" {...shortWrapper}>\r\n          {getFieldDecorator("activityCities", {\r\n            rules: [{ required: true, message: "活动城市必选" }]\r\n          })(<TreeSelect {...tProps} />)}\r\n        </FormItem>\r\n\r\n### What is expected?\r\n打包不报错\r\n\r\n### What is actually happening?\r\nstart build 模式下没有问题，production模式下打包报错。webpack4.0生产模式下默认启用UglifyJsPlugin插件，可能混淆压缩出问题了。\r\n\r\n| Environment | Info |\r\n|---|---|\r\n| antd | 3.20.7 |\r\n| React | 16.8.3 |\r\n| System | window |\r\n| Browser | Google Chrome  版本 75.0.3770.142（正式版本） （64 位） |\r\n\r\n---\r\n报错信息\r\nmain.bundle.js:formatted:224812 Uncaught TypeError: Object(...) is not a function\r\n    at _t (main.bundle.js:formatted:224812)\r\n    at main.bundle.js:formatted:226251\r\n    at u (main.bundle.js:formatted:226242)\r\n    at value (main.bundle.js:formatted:226250)\r\n    at ar (main.bundle.js:formatted:98068)\r\n    at sr (main.bundle.js:formatted:98140)\r\n    at Ci (main.bundle.js:formatted:98966)\r\n    at main.bundle.js:formatted:100624\r\n    at Yo (main.bundle.js:formatted:100767)\r\n    at Uo (main.bundle.js:formatted:100791)\r\n\r\n\r\n具体报错的位置\r\n  function wt(e) {\r\n        var t = e.title\r\n          , n = e.label\r\n          , a = e.key\r\n          , r = e.value\r\n          , i = st({}, e);\r\n        return n && !t && (ct || (Je()(!1, "\'label\' in treeData is deprecated. Please use \'title\' instead."),\r\n        ct = !0),\r\n        i.title = n),\r\n        a || (i.key = r),\r\n        i\r\n    }\r\n    function _t(e) {\r\n        return Object(Xe.g)(e, {\r\n            processProps: wt\r\n        })\r\n    }\r\n\r\n\r\n<!-- generated by ant-design-issue-helper. DO NOT REMOVE -->'
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/17900",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17900/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17900/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17900/events",
    html_url: "https://github.com/ant-design/ant-design/issues/17900",
    id: 472923144,
    node_id: "MDU6SXNzdWU0NzI5MjMxNDQ=",
    number: 17900,
    title: "TreeSelect focus() blur() doesn't have the result as espect",
    user: {
      login: "Hideman85",
      id: 16165119,
      node_id: "MDQ6VXNlcjE2MTY1MTE5",
      avatar_url: "https://avatars0.githubusercontent.com/u/16165119?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Hideman85",
      html_url: "https://github.com/Hideman85",
      followers_url: "https://api.github.com/users/Hideman85/followers",
      following_url:
        "https://api.github.com/users/Hideman85/following{/other_user}",
      gists_url: "https://api.github.com/users/Hideman85/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/Hideman85/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Hideman85/subscriptions",
      organizations_url: "https://api.github.com/users/Hideman85/orgs",
      repos_url: "https://api.github.com/users/Hideman85/repos",
      events_url: "https://api.github.com/users/Hideman85/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/Hideman85/received_events",
      type: "User",
      site_admin: false
    },
    labels: [
      {
        id: 203750412,
        node_id: "MDU6TGFiZWwyMDM3NTA0MTI=",
        url:
          "https://api.github.com/repos/ant-design/ant-design/labels/%F0%9F%90%9B%20Bug",
        name: "🐛 Bug",
        color: "fc2929",
        default: false
      }
    ],
    state: "open",
    locked: false,
    assignee: {
      login: "yesmeck",
      id: 465125,
      node_id: "MDQ6VXNlcjQ2NTEyNQ==",
      avatar_url: "https://avatars0.githubusercontent.com/u/465125?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/yesmeck",
      html_url: "https://github.com/yesmeck",
      followers_url: "https://api.github.com/users/yesmeck/followers",
      following_url:
        "https://api.github.com/users/yesmeck/following{/other_user}",
      gists_url: "https://api.github.com/users/yesmeck/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/yesmeck/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/yesmeck/subscriptions",
      organizations_url: "https://api.github.com/users/yesmeck/orgs",
      repos_url: "https://api.github.com/users/yesmeck/repos",
      events_url: "https://api.github.com/users/yesmeck/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/yesmeck/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "yesmeck",
        id: 465125,
        node_id: "MDQ6VXNlcjQ2NTEyNQ==",
        avatar_url: "https://avatars0.githubusercontent.com/u/465125?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/yesmeck",
        html_url: "https://github.com/yesmeck",
        followers_url: "https://api.github.com/users/yesmeck/followers",
        following_url:
          "https://api.github.com/users/yesmeck/following{/other_user}",
        gists_url: "https://api.github.com/users/yesmeck/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/yesmeck/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/yesmeck/subscriptions",
        organizations_url: "https://api.github.com/users/yesmeck/orgs",
        repos_url: "https://api.github.com/users/yesmeck/repos",
        events_url: "https://api.github.com/users/yesmeck/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/yesmeck/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 1,
    created_at: "2019-07-25T15:12:22Z",
    updated_at: "2019-07-29T08:15:15Z",
    closed_at: null,
    author_association: "NONE",
    body:
      "- [x] I have searched the [issues](https://github.com/ant-design/ant-design/issues) of this repository and believe that this is not a duplicate (in English opened issues).\r\n\r\n### Reproduction link\r\n[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/antd-reproduction-template-ohmky)\r\n\r\n### Steps to reproduce\r\nFocus is trigger after 1s and blur is trigger after 3s\r\nYou can also open the select an click on blur button\r\n\r\n### What is expected?\r\nfocus() focus and open the TreeSelect\r\nblur() blur and close TreeSelect\r\n\r\n### What is actually happening?\r\nNothing\r\n\r\n| Environment | Info |\r\n|---|---|\r\n| antd | 3.20.6 |\r\n| React | react |\r\n| System | Latest Ubuntu |\r\n| Browser | Latest firefox |\r\n\r\n\r\n<!-- generated by ant-design-issue-helper. DO NOT REMOVE -->"
  },
  {
    url: "https://api.github.com/repos/ant-design/ant-design/issues/17899",
    repository_url: "https://api.github.com/repos/ant-design/ant-design",
    labels_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17899/labels{/name}",
    comments_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17899/comments",
    events_url:
      "https://api.github.com/repos/ant-design/ant-design/issues/17899/events",
    html_url: "https://github.com/ant-design/ant-design/issues/17899",
    id: 472922990,
    node_id: "MDU6SXNzdWU0NzI5MjI5OTA=",
    number: 17899,
    title: "Mentions select the option,change the value in the textarea",
    user: {
      login: "symnetry",
      id: 20887001,
      node_id: "MDQ6VXNlcjIwODg3MDAx",
      avatar_url: "https://avatars2.githubusercontent.com/u/20887001?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/symnetry",
      html_url: "https://github.com/symnetry",
      followers_url: "https://api.github.com/users/symnetry/followers",
      following_url:
        "https://api.github.com/users/symnetry/following{/other_user}",
      gists_url: "https://api.github.com/users/symnetry/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/symnetry/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/symnetry/subscriptions",
      organizations_url: "https://api.github.com/users/symnetry/orgs",
      repos_url: "https://api.github.com/users/symnetry/repos",
      events_url: "https://api.github.com/users/symnetry/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/symnetry/received_events",
      type: "User",
      site_admin: false
    },
    labels: [],
    state: "open",
    locked: false,
    assignee: {
      login: "yutingzhao1991",
      id: 1061968,
      node_id: "MDQ6VXNlcjEwNjE5Njg=",
      avatar_url: "https://avatars0.githubusercontent.com/u/1061968?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/yutingzhao1991",
      html_url: "https://github.com/yutingzhao1991",
      followers_url: "https://api.github.com/users/yutingzhao1991/followers",
      following_url:
        "https://api.github.com/users/yutingzhao1991/following{/other_user}",
      gists_url: "https://api.github.com/users/yutingzhao1991/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/yutingzhao1991/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/yutingzhao1991/subscriptions",
      organizations_url: "https://api.github.com/users/yutingzhao1991/orgs",
      repos_url: "https://api.github.com/users/yutingzhao1991/repos",
      events_url:
        "https://api.github.com/users/yutingzhao1991/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/yutingzhao1991/received_events",
      type: "User",
      site_admin: false
    },
    assignees: [
      {
        login: "yutingzhao1991",
        id: 1061968,
        node_id: "MDQ6VXNlcjEwNjE5Njg=",
        avatar_url: "https://avatars0.githubusercontent.com/u/1061968?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/yutingzhao1991",
        html_url: "https://github.com/yutingzhao1991",
        followers_url: "https://api.github.com/users/yutingzhao1991/followers",
        following_url:
          "https://api.github.com/users/yutingzhao1991/following{/other_user}",
        gists_url:
          "https://api.github.com/users/yutingzhao1991/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/yutingzhao1991/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/yutingzhao1991/subscriptions",
        organizations_url: "https://api.github.com/users/yutingzhao1991/orgs",
        repos_url: "https://api.github.com/users/yutingzhao1991/repos",
        events_url:
          "https://api.github.com/users/yutingzhao1991/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/yutingzhao1991/received_events",
        type: "User",
        site_admin: false
      }
    ],
    milestone: null,
    comments: 0,
    created_at: "2019-07-25T15:12:08Z",
    updated_at: "2019-07-25T15:14:32Z",
    closed_at: null,
    author_association: "NONE",
    body:
      "- [x] I have searched the [issues](https://github.com/ant-design/ant-design/issues) of this repository and believe that this is not a duplicate.\r\n\r\n### What problem does this feature solve?\r\nconst list = [\r\n\t{email:'11@112.com',nickname:'work1'},\r\n\t{email:'aa@aaa.com',nickname:'work2'},\r\n\t{email:'11@114.com',nickname:'work3'},\r\n\t{email:'11@115.com',nickname:'work4'},\r\n]\r\n\r\n我有一个如上所示的list,我的需求是能够输入我的nickname或是email，一样能够at到对应的数据\r\n我现在能够想到的是在option中把nickname和email拼在一起，这样使我能够键入关键词时能够匹配到它们\r\n```<Option key={key} value={`${nickname}-${email}`} >{nickname}</Option>```\r\n这么写确实能够匹配到我想要的数据，然而在textarea显示的则是我这个option的value，也就是它可能会是“aa@aaa.com-work2”这样的形式展示\r\n\r\n### What does the proposed API look like?\r\n希望能够增加一个配置的方法 能够使用户在选择option以后编辑这个option的值,比方说上述例子添加一个 option=>option.split('-')[1] 能够返回对应的值\r\n\r\n\r\n<!-- generated by ant-design-issue-helper. DO NOT REMOVE -->"
  }
];
