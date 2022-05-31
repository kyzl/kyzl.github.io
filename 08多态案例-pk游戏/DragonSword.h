#pragma once
#include "Weapon.h"
#include <iostream>
using namespace std;

class DragonSword :public Weapon
{
public:
	DragonSword();

	// 获取基础伤害
	virtual int getBaseDamage() ;
	// 获取吸血伤害
	virtual int getSukBlood() ;

	// 获取定身
	virtual bool getHold() ;

	// 获取暴击
	virtual bool getCrit() ;

	// 暴击率 吸血率 定身率
	int suckRate;
	int holdRate;
	int crikRate;

	// 传入概率 判断是否触发
	bool isTrigger(int rate);
};

