# Workflow on GitHub and Luffy
## Table of Contents
<details open>
<summary><b>(click to expand or hide)</b></summary>
<!-- MarkdownTOC -->

1. [Notice about Comands](#notice)
1. [Setup Development Branch](#setup)
1. [Working with Development Branch and Pull Request](#dev-and-PR)
1. [Useful Commands](#commands)
1. [Commit Title](#commit)
1. [Access Website on Luffy](#luffy)

<!-- /MarkdownTOC -->
</details>

---

<a id="notice"></a>

## Notice about Commands
1. Texts surronded with a pair of angle brackets have to be replaced with proper texts. E.g., `<email address>` should be replaced and it can be `hello@gmail.com`.
1. Texts surronded with a pair of square brackets are optional. E.g., `[--all]` can  appear as `--all` or nothing.
1. There may be texts surronded with both `<>` and `[]`. It means that the texts are optional. If it is used, the content should be replaced.

<a id="setup"></a>

## Setup Development Branch
1. Follow the [instructions] to create a token to access to the account in the command line.
1. (Press `windows + R` and enter `cmd` to open the terminal.)
1. Settings to login once. ([Ref.](https://stackoverflow.com/a/17979600))  
    `git config --global credential.helper store`
1. Login to GitHub and download the repository by entering the following command in the terminal  
    `cd <somewhere>` (Do it if neccesary)  
    `git clone https://github.com/coding-ray/suspicious-billing-notification.git`  
    `cd suspicious-billing-notification`
1. Create a new branch and enter into it.  
    `git checkout -b dev-<name>`  
    (E.g., `git checkout -b dev-ray`)
1. After making some changes, push the changes to the remote (origin).
    `git add .`  
    `git commit [-m <message>]`  
    (E.g, `git commit -m "feat: add profiles"`)  
    `git push -u origin dev-<name>`  
    (E.g., `git push -u origin dev-ray`)
1. (Optional) Set the editor of Git commit or rebase and etc.  
    `git config --global core.editor "vim"` (to set to vim) or  
    `git config --global core.editor "code --wait"` (to set to VSCode)

<a id="dev-and-PR"></a>

## Working with Development Branch and Pull Request
1. Develope in the personal development branch and feature branches.  
    `git checkout dev-<name>` or  
    `git checkout feat-<feat>`
1. After making some changes, commit it atomically.  
    `git add .` or `git add <filename1> [<filename2> ...]`  
    `git commit [-m <message>]`
1. Push the commit(s) to the remote. (Note that it is normal to have some commits that are not pushed to the remote. They can be rebased later.)  
    `git push`
1. After 1 or more features are done, open a pull request on the [Github](https://github.com/coding-ray/suspicious-billing-notification/pulls) with the following settings.
    * base: `master`
    * compare: `dev-<name>`
1. Ray (柏叡) will review the pull request later. The other ones can also comment on it.

<a id="commands"></a>

## Useful Commands
1. Rename or move a file without a deletion and an addition in git commit  
    `git mv <file> <directory>`  
    `git mv <file> <new_name>`
1. Display the commit history in a beautiful graph. (Remember "a dog" which is composed of the initials of the 4 options)  
    `git log --all --decorate --oneline --graph`

<a id="commit"></a>

## Commit Title
|Type|Content|
|-----|---------------|
|feat|new features|
|fix|defects or bugs|
|chore|changes that don’t alter the source, but necessary|
|docs|documentation changes|
|perf|performance enhancements|
|refactor|refactors; altering the code, but not changing functionality|
|revert|reverting changes|
|style|cosmetic changes|
|test|unit tests|
  
[Reference](https://dev.to/sublimegeek/clean-conventional-commits-40l8)

<a id="luffy"></a>

## Access Website on Luffy
Master branch
1. Login with `Ray314` as the username and the password.
1. `cd no-1-website`
1. `git pull`
1. Open the following link  
    `https://luffy.ee.ncku.edu.tw/~Ray314/no-1-website/index.html`

Individual branch
1. Note that the following commands are for the reference.
1. Login to your own account
1. Clone into `~/git/no-1-website` with the commands run in `~`:  
    `mkdir git` (Do it once)  
    `cd git`  
    `git clone https://github.com/coding-ray/suspicious-billing-notification.git`  
    (Log in with your username and token.)  
    `mv suspicious-billing-notification no-1-website`
1. Create an externally accessable link in ~/public_html  
    `cd ../public_html`  
    `ln -s ../git/no-1-website`  
    (Share the link to the website like the following one.  
    https://luffy.ee.ncku.edu.tw/~Ray314/no-1-website/index.html)
    https://luffy.ee.ncku.edu.tw/~KABI-1ST/no-1-website/index.html
1. The link to the website of the individual branch is listed as follows:
    * 黃柏叡： https://luffy.ee.ncku.edu.tw/~Ray314/no-1-website-dev-ray/index.html
    * 徐子灝 : https://luffy.ee.ncku.edu.tw/~KABI-1ST/no-1-website-dev-SleepingDisirer/index.html
