# Git hub part 2

## Git ammend
<!-- 
### How to remove added file

---
``git rm --cached file.txt ``

you could use to remove file from gitignore (try it)

--- -->

### Starting to edit with --amend (the secret)
`` git commit --amend``

Add some file on last commit 

``git commit --amend --no-edit <file>``


Edit date time on last commit 

``git commit --amend --date "sadfasfdsda"``


Edit message on last commit 

``git commit --amend -m "new message"``

#### Other options

![Other options](gitammend.png)

---

## Git stash
When you need change the branch, but you don`t wanna commit

``git stash``

For list all stashed files

``git stash list``

If you wanna apply stashed items

``git stash apply`` / ``git stash pop``

or

In a specific stashed

``git stash apply stash@{2}``

Create a branch using a stashed step

``git stash branch <name>``


Remove all stashed WIP

``git stash clear``

Remove specific stashed

``git stash drop stash@{2}``

---

## Revert commits
How to come back your commit but keeping hisorical context

``git revert <commitId>``

Revert using quantity of commits

``git revert HEAD^3``

_This will create another commit with a revert message_

---

## Reset commits

How to remove your commits but keeping the files

``git reset --soft <commitId>``

How to remove your commit without historical files

``git reset --hard <commitId>``

Reset using quantity of commits

``git reset --soft HEAD^1``
