#pragma once
#include "Weapon.h"
#include <iostream>
using namespace std;

class Knife : public Weapon {
public:

	Knife();

	// 获取基础伤害
	virtual int getBaseDamage();
	// 获取吸血伤害
	virtual int getSukBlood();

	// 获取定身
	virtual bool getHold();

	// 获取暴击
	virtual bool getCrit();
};