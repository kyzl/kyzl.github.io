#pragma once
#include <iostream>
using namespace std;
#include <string>
#include "Hero.h"

class Hero;

class Monster {
public :

	string m_MonsterName; // 英雄名
	int m_Atk; // 攻击力
	int m_Def; // 防御力
	int m_Hp; // 血量

	bool is_Hold; //定身
	Monster();

	void attackHero(Hero *hero);

};