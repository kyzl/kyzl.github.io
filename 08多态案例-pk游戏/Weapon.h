#pragma once
#include <iostream>
using namespace std;
#include <string>

// 抽象类
class Weapon {
public:

	// 获取基础伤害
	virtual int getBaseDamage() = 0;
	// 获取吸血伤害
	virtual int getSukBlood() = 0;

	// 获取定身
	virtual bool getHold() = 0;
	 
	// 获取暴击
	virtual bool getCrit() = 0;

	string m_WeaponName; // 武器名称
	int baseDamage; // 基础伤害
	virtual ~Weapon();
};
