#!/bin/bash

rsync -uav --delete --progress -e ssh mecardoso@html.inf.ufrgs.br:/home/grad/mecardoso ~/projects/site_pessoal

