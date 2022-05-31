#include "DragonSword.h"


DragonSword::DragonSword()
{
	this->baseDamage = 20;
	this->m_WeaponName = "屠龙宝刀";
	this->suckRate = 20;
	this->holdRate = 35;
	this->crikRate = 40;
}

int DragonSword::getBaseDamage()
{
	return this->baseDamage;
}

int DragonSword::getSukBlood()
{
	if (isTrigger(this->suckRate)) {

		return  this->baseDamage /2; // 按照武器伤害的一般吸血
	}else{
	
		return 0;
	}
	
}

bool DragonSword::getHold()
{
	if (isTrigger(this->holdRate)) {
		return true;
	}
	return false;
}

bool DragonSword::getCrit()
{
	if (isTrigger(this->crikRate)) {
		return true;
	}
	return false;
}

bool DragonSword::isTrigger(int rate)
{
	// 通过isTrigger来判断是否触发特效
	// 随机0-100的数字
	int num = rand() % 100 + 1;

	if (num < rate) {

		return true;
	}else return false;
}
