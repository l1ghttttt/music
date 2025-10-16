package main

import (
	"context"
)

type MusicApp struct {
	ctx context.Context
}

func NewApp() *MusicApp {
	return &MusicApp{}
}

func (a *MusicApp) startup(ctx context.Context) {
	a.ctx = ctx
}
