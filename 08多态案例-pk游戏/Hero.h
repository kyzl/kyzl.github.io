#pragma once
#include <iostream>
using namespace std;
#include <string>
#include "Weapon.h"
#include "Monster.h"

class Monster; // 类声明  

class Hero {

public:
	string m_HeroName; // 英雄名
	int m_Atk; // 攻击力
	int m_Def; // 防御力
	int m_Hp; // 血量

	Hero();

	// 武器
	Weapon  * weapon;

	void equipWeapon(Weapon  * weapon);
	void attckMonster(Monster * monster);	 
};