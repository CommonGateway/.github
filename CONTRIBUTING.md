# CONTRIBUTION

How to contribute?
We're glad you're reading this because any good open source project can always use volunteers for the project. There are some rules to follow, but don't panic, it's easy!

If you haven't already, come and find us in our Slack(EXAMPLE). We want you to work on things you're passionate about.

Here are some essential resources:

[Technical documentation](https://docs.conductor-gateway.app/en/latest/)

## Reporting Bugs

___________________________________________________________________________________________________

Then, if it appears that it's a real bug, you may report it using Github by following these 3 points:

- Check if the bug is not already reported!
- A clear title to resume the issue
- A description of the workflow needed to reproduce the bug,

>__NOTE__: Don’t hesitate to give as much information as you can (OS, PHP version extensions...)

## Pull Requests

### Writing a Pull Request

Send a Pull Request with a clear list of what you've done. Please follow the Public Code coding conventions.(below) and make sure all your commits are atomic (one function per commit).

The Common Ground project follows [Symfony coding standards](https://symfony.com/doc/current/contributing/code/standards.html).
But don't worry, you can fix CS issues automatically using the [PHP CS Fixer](http://cs.sensiolabs.org/) tool:

```bash
php-cs-fixer.phar fix
```

And then, add fixed file to your commit before push.
Be sure to add only __your modified files__. If another files are fixed by cs tools, just revert it before commit.

### Sending a Pull Request

When you send a PR, just make sure that:

- You add valid test cases.
- Tests are green.
- You make a PR on the related documentation in the [Common Gateway](https://github.com/ConductionNL/commonground-gateway/tree/master/redoc/docs) repository.
- You make the PR on the same branch you based your changes on. If you see commits
  that you did not make in your PR, you're doing it wrong.
- Squash your commits into one commit. (see the next chapter)

Fill in the following header from the pull request template:

```markdown|
| Q             | A|
| ------------- | ---|
| Bug fix?      | yes/no|
| New feature?  | yes/no|
| BC breaks?    | no|
| Deprecations? | no|
| Tests pass?   | yes|
| Fixed tickets | #1234, #5678|
| License       | MIT|
| Doc PR        | api-platform/docs#1234|

Always write a clear log message for your commits. One-line messages are fine for small changes, but more significant changes should be
should ideally look like:

`$ git commit -m "A short summary of the commit`

 A paragraph that describes what has changed and what the impact is."

## Squash your Commits

If you have 3 commits. So start with:

```bash
git rebase -i HEAD~3
```

An editor will be opened with your 3 commits, all prefixed by `pick`.

Replace all `pick` prefixes by `fixup` (or `f`) __except the first commit__ of the list.

Save and quit the editor.

After that, all your commits where squashed into the first one and the commit message of the first commit.

If you would like to rename your commit message type:

```bash
git commit --amend
```

Now force push to update your PR:

```bash
git push --force
```


## Writing User stories

We user stories issues conform the  .. standard, meaning that the title MUST be written in the "As [a user persona], I want [to perform this action] so that [I can accomplish this goal].” format

An user story SHOULD contain a short description of the desired application behavior (and if applicable the current application behavior)

Additionally all issues should contain the following sections
- Stakeholders: Stakeholders are individuals or groups that have an interest or concern in a product, project, or organization, and can affect or be affected by its actions or outcomes.
- Tasks: An task is a specific problem or challenge that needs to be addressed, tracked, and resolved within an user story.
- Acceptance criteria: Acceptance criteria are a set of clearly defined and measurable conditions that a product, feature, or user story must meet to be considered completed and accepted by the stakeholders.

User stories MUST be sized in story points, 10 story points represent a single day of work (8 hours). An user story MAY NOT have a size greater then 10. User stories that take more then 1 day should be divided into several user stories and combined in an EPIC.

## Writing Epics

Epics MUST have a title and description, but unlike user stories the can be more generic and can describe either journeys or project parts

Epics  MUST be sized in story points, 10 story points represent a single day of work (8 hours). An epic MAY NOT have a size smaller then 10. In that case it is an User Story.

## Writing Task
Task are small parts of work that are part of an user story, they should not 5 story points (4 hours of work) 

## Coding conventions
All code should
- Adhere to PSR-12 standards, we use [PHP Codesniffer](https://github.com/squizlabs/PHP_CodeSniffer) and [PHP Mess Detector](https://phpmd.org/) to check code for these standards.
- All code is released under the [EUPL 1.2](https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12) license
- The default author for code is Conduction BV <info@conduction.nl> but this may be changed if the code dosn't originate from the conduction organization.

### Classes
All classes must
- Start with a docblock containing 
  - the name of the class the reason it exists 
  - tags for the author(@author), license(@license), documentatation (@see), bundle (@package), sementic version of codebase where the class was added (@since)
- End with }//end class

### Functions
All functions must be
- accompanied by a docblock
- End with }//end (function name)
- Business logic should be accompanied by inline code comments that explains what the business logics does.



This is open-source software. Think about the people reading the code and make sure it looks good to them.

We also use the [Public Code standards](https://publiccode.net/)

Thank you, the Common Gateway community!

# License and Copyright Attribution

Be sure to you have the right to do that (if you are a professional, ask your company)!

If you include code from another project, please mention it in the Pull Request description and credit the original author.
